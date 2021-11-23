import clsx from 'clsx';
import styles from './index.module.scss';

export interface InputProps {
  className?: string;
}

export const Input: React.FC<InputProps> = props => {
  const { className, children } = props;
  return (
    <div className={styles.Input}>
      {children}
    </div>
  );
};
