import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import{format, formatDistanceToNow} from 'date-fns';

export function Post (props){
    const publishedDateFormatted = format((props.publishedAt), 'dd/MM/yyyy');
    const publishedDateRaltivetoNow = formatDistanceToNow((props.publishedAt), {addSuffix: true});
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

          
            <form className={styles.commentForm}>
                <strong>Deixe seu comentario</strong>
                <textarea placeholder='Deixe um Comentario'/>
                <footer>
                <button type='submit'>Publicar</button>
                </footer>

                
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>

    )
}