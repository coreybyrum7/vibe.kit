import clsx from 'clsx';
import styles from './index.module.scss';

export interface CardProps {
  className?: string;
}

export const Card: React.FC<CardProps> = props => {
  const { className, children } = props;
  return (
    <div className={styles.Card}>
      {children}
    </div>
  );
};
