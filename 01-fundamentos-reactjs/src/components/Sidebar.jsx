import styles from './Sidebar.module.css';
import retanguloSidebar from '../assets/retanguloSidebar.svg';
import {PencilLine} from 'phosphor-react'
export function Sidebar() {
  return(
  <aside className={styles.sidebar}>
    <img className={styles.cover} src={retanguloSidebar} alt="retanguloSidebar" />   

    <div className={styles.profile}>
      <img className= {styles.avatar} src="https://github.com/diego3g.png" alt="foto Perfil" />
        <strong>Diego Fernandes</strong>
        <span>Web Delevoper</span>
    </div>


    <footer className={styles.footer}> 
        <a href="#">
          <PencilLine size={20} />
            Editar seu perfil
        </a>
    </footer>


  </aside>

  )
}