import clsx from 'clsx';
import styles from './index.module.scss';

export interface DropdownProps {
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = props => {
  const { className, children } = props;
  return (
    <div className={styles.Dropdown}>
      {children}
    </div>
  );
};
