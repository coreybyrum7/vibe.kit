import clsx from 'clsx';
import styles from './index.module.scss';

export interface TabsProps {
  className?: string;
}

export const Tabs: React.FC<TabsProps> = props => {
  const { className, children } = props;
  return (
    <div className={styles.Tabs}>
      {children}
    </div>
  );
};
