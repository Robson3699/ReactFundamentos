import styles from './Sidebar.module.css';
import retanguloSidebar from '../assets/retanguloSidebar.svg';
import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';
export function Sidebar() {
  return(
  <aside className={styles.sidebar}>
    <img className={styles.cover} src={retanguloSidebar} alt="retanguloSidebar" />   

    <div className={styles.profile}>
      <Avatar src='http://github.com/maykbrito.png'/>
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