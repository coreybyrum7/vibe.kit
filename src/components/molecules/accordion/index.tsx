import clsx from 'clsx';
import styles from './index.module.scss';

export interface AccordionProps {}

export const Accordion: React.FC<AccordionProps> = ( props ) => {
  const { children } = props;
  return (
    <div className={clsx(
      styles.Accordion,
    )}>
      { children }
    </div>
  );
};
