import clsx from 'clsx';
import styles from './index.module.scss';

export interface DropDownItemProps {
  className?: string;
}

export const DropDownItem: React.FC<DropDownItemProps> = props => {
  const { className, children } = props;
  return (
    <div className={styles.DropDownItem}>
      {children}
    </div>
  );
};
