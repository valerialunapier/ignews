import Image from 'next/image';
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles['header-container']}>
      <div className={styles['header-content']}>
        <Image src="/images/logo.svg" width={100} height={100} alt="Logo ig.news" />
        <nav>
          <a href="#" className={styles.active}>Home</a>
          <a href="#">Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}