import clsx from 'clsx';
import styles from './index.module.scss';

export interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = props => {
  const { className, children } = props;
  return (
    <div className={styles.Navigation}>
      {children}
    </div>
  );
};
