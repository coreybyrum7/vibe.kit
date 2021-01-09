// import { FaBeer } from '';
import styles from './index.module.scss';
import { FaReact } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.Footer__icon}>
        <FaReact />
      </div>
      <div className={styles.Footer__copy}>Created with React.js</div>
    </div>
  )
}
