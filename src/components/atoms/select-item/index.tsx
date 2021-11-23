import clsx from 'clsx';
import styles from './index.module.scss';

export interface SelectItemProps {
  className?: string;
}

export const SelectItem: React.FC<SelectItemProps> = props => {
  const { className, children } = props;
  return (
    <div className={styles.Input}>
      {children}
    </div>
  );
};
