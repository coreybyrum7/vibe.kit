import clsx from 'clsx';
import styles from './index.module.scss';

export interface RowProps {
  className?: string;
}

export const Row: React.FC<RowProps> = props => {
  const { className, children } = props;
  return (
    <div className={styles.Input}>
      {children}
    </div>
  );
};
