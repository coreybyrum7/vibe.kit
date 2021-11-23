import clsx from 'clsx';
import styles from './index.module.scss';

export interface TabItemProps {
  className?: string;
}

export const TabItem: React.FC<TabItemProps> = props => {
  const { className, children } = props;
  return (
    <div className={styles.TabItem}>
      {children}
    </div>
  );
};
