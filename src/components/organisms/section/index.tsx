import clsx from 'clsx';
import styles from './index.module.scss';

export interface SectionProps {
  id?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, className, children }) => {
  return (
    <section className={clsx(styles.Section, className)} id={id}>
      {children}
    </section>
  );
};
