import clsx from 'clsx';
import styles from './index.module.scss';

export interface CheckboxProps {
  className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = props => {
  const { className, children } = props;
  return (
    <div className={styles.Checkbox}>
      {children}
    </div>
  );
};
