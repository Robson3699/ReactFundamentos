import styles from './Post.module.css';
export function Post (){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/diego3g.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Diego Fernandes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time datetime="">Publicado a 1h</time>
            </header>


            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Acabei de subir mais um porjeto no m eu portifa. EH um projeto que fiz no NLW Return evento da rocketseat</p>
                <p><a href="">jane.desing/doctorcare</a></p>
                <p><a href="">#novoprojeto #NLW #rocketseat</a></p>
            </div>
        </article>

    )
}