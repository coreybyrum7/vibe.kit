import clsx from 'clsx';
import styles from './index.module.scss';

export interface TypographyProps {
  className?: string;
}

export const Typography: React.FC<TypographyProps> = props => {
  const { className, children } = props;
  return (
    <div className={styles.Typography}>
      {children}
    </div>
  );
};
