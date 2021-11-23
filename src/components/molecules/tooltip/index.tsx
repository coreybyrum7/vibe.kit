import clsx from 'clsx';
import styles from './index.module.scss';

export interface TooltipProps {
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = props => {
  const { className, children } = props;
  return (
    <div className={styles.Tooltip}>
      {children}
    </div>
  );
};
