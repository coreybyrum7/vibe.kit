import clsx from 'clsx';
import styles from './index.module.scss';

export interface SelectProps {
  className?: string;
}

export const Select: React.FC<SelectProps> = props => {
  const { className, children } = props;
  return (
    <div className={styles.Select}>
      {children}
    </div>
  );
};
