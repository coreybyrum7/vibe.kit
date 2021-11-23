import clsx from 'clsx';
import styles from './index.module.scss';

export interface SurfaceProps {
  className?: string;
}

export const Surface: React.FC<SurfaceProps> = props => {
  const { className, children } = props;
  return (
    <div className={styles.Surface}>
      {children}
    </div>
  );
};
