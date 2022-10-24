import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles['header-container']}>
      <div className={styles['header-content']}>
        <img src="/images/logo.svg" alt="Logo ig.news" />
        <nav>
          <a href="#" className={styles.active}>Home</a>
          <a href="#">Posts</a>
        </nav>
      </div>
    </header>
  );
}