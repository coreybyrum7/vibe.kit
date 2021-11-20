import clsx from 'clsx';
import styles from './index.module.scss';

export interface GridProps {
  className?: string;
}

export const Grid: React.FC<GridProps> = props => {
  const { className, children } = props;
  return (
    <div className={styles.Grid}>
      {children}
    </div>
  );
};
