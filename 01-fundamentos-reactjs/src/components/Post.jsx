import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
export function Post (){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src="https://github.com/diego3g.png" alt="foto do maluco" />
                    <div className={styles.authorInfo}>
                        <strong>Diego Fernandes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time datetime="">Publicado a 1h</time>
            </header>


            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Acabei de subir mais um porjeto no meu portifa. EH um projeto que fiz no NLW Return evento da rocketseat</p>
                <p><a href="">jane.desing/doctorcare</a></p>
                <p><a href="">#novoprojeto #NLW #rocketseat</a></p>
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