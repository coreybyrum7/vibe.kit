import styles from './index.module.scss';

export const Page = ({ children }) => {

  return (
    <div className={styles.Page}>
        {children}
    </div> 
  )
}
