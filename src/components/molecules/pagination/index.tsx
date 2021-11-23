import clsx from 'clsx';
import styles from './index.module.scss';

export interface PaginationProps {
  className?: string;
}

export const Pagination: React.FC<PaginationProps> = props => {
  const { className, children } = props;
  return (
    <div className={styles.Pagination}>
      {children}
    </div>
  );
};
