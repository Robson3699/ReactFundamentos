import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import{format, formatDistanceToNow} from 'date-fns';
import { useState } from 'react';

export function Post (props){
    ///*****************constantes*************/
    const [comments, setComments]=useState([
        'Poste meio Merda em'
    ]);

    const [newCommentText, setNewCommentText]=useState('');


    const publishedDateFormatted = format((props.publishedAt), 'dd/MM/yyyy');
    const publishedDateRaltivetoNow = formatDistanceToNow((props.publishedAt), {addSuffix: true});

    ///*****************************************************/


    //********FUCTIONS******************/
    

    function handleCreateNewComment(){
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');

    }

    function handleNewCommentChange(event){
        setNewCommentText(event.target.value);
    }

    function deleteComment(comment){
        console.log(`deletar comentario ${comment}`)

    }

    
    ///*****************************************************/

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
                        return <p key={line.content}>{line.content}</p>
                    }else if(line.type==='link'){
                        return <p key={line.content}><a href=""></a></p>
                }

                      })}

            </div>

          
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>

                <strong>Deixe seu comentario</strong>
                <textarea placeholder='Deixe um Comentario' onChange={handleNewCommentChange} value={newCommentText}></textarea>
                <footer>
                <button type='submit'>Publicar</button>
                </footer>

                
            </form>

            <div className={styles.commentList}>
                {comments.map(comment =>{
                    return (
                    <Comment 
                    key={comment} 
                    content={comment} 
                    onDeleteComment={deleteComment}
                    />
                )
                })}
            </div>
        </article>

    )
}