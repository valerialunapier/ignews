import styles from './styles.module.scss';

export const SubscribeButton = () => {
  return (
    <button 
      type="button"
      className={styles['subscribe-button']}
    >
      Subscribe now
    </button>
  );
}