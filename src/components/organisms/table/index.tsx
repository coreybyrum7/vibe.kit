import clsx from 'clsx';
import styles from './index.module.scss';

export interface TableProps {
  className?: string;
}

export const Table: React.FC<TableProps> = props => {
  const { className, children } = props;
  return (
    <div className={styles.Table}>
      {children}
    </div>
  );
};
