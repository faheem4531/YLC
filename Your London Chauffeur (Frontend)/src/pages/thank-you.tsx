import Link from 'next/link';
import styles from '../styles/ThankYou.module.css'; // Create this CSS file for styling
import GenericButton from '@/components/genericButton';

const ThankYou = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Thank You!</h1>
        <p className={styles.description}>Your form has been successfully submitted. We appreciate your time and input.</p>
        <Link href="/">
          <GenericButton title='Back to home' />
        </Link>
      </div>
    </div>
  );
}

export default ThankYou