import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import{format, formatDistanceToNow} from 'date-fns';
import { useState } from 'react';

export function Post (props){
    const [comments, setComments]=useState([
        1,
        2
    ]);
    const publishedDateFormatted = format((props.publishedAt), 'dd/MM/yyyy');
    const publishedDateRaltivetoNow = formatDistanceToNow((props.publishedAt), {addSuffix: true});
    

    function handleCreateNewComment(){
        event.preventDefault();
        setComments([...comments, comments.length + 1]);
        console.log(comments)
    }

    return (
        <article className={styles.post}>


            <header>
                <div className={styles.author}>

                    <Avatar hasBorder src={props.author.avatarUrl} alt="foto do maluco" />

                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
               
               
                </div>

                <time title={publishedDateFormatted}>{publishedDateRaltivetoNow}</time>
            </header>


            <div className={styles.content}>
                
                {props.content.map(line =>{
                    if(line.type==='paragraph'){
                        return <p>{line.content}</p>
                    }else if(line.type==='link'){
                        return <p><a href=""></a></p>
                }

                      })}

            </div>

          
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>

                <strong>Deixe seu comentario</strong>
                <textarea placeholder='Deixe um Comentario'/>
                <footer>
                <button type='submit'>Publicar</button>
                </footer>

                
            </form>

            <div className={styles.commentList}>
                {comments.map(comment =>{
                    return <Comment key={comment} />
                })}
            </div>
        </article>

    )
}