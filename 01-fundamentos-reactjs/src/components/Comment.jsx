import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
export function Comment() {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="http://github.com/diego3g.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='11 de maio de 2020 as 08:90' dateTime='Publicado ha 1hr'>
                                publicado a 1hr
                            </time>
                        </div>
                        <button title='Deletar'><Trash size={24}/></button>

                    </header>
                    <p>Muito Bom Devon Parabens!</p>

                </div>
                <footer>
                    <button><ThumbsUp size={20}/>
                    Aplaudir <span>20</span></button>
                </footer>
            </div>
        </div>

    )
}