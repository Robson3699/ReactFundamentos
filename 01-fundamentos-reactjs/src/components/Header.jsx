import styles from './Header.module.css';

import IgniteLogo from '../assets/Ignite-Logo.svg';

export function Header(){
    return (
        <header className={styles.header}>
          <img src={IgniteLogo} alt="ignitelogo" />
          <strong>Ignite Feed</strong>
        </header>
    );
}