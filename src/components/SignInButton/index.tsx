import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

export const SignInButton = () =>  {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button 
      type="button"
      className={styles['sign-in-button']}
    >
      <FaGithub color="#04d361" />
      Valéria Letícia
      <FiX color="#737380" className={styles['close-icon']} />
    </button>
  ) : (
    <button 
      type="button"
      className={styles['sign-in-button']}
    >
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}