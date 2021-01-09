import clsx from 'clsx';
import styles from './index.module.scss';

export interface ListProps {
  type: string;
  className?: string;
  items: string[];
}

export const List: React.FC<ListProps> = ( props ) => {
  const { type, className, items } = props;
  return (
    <ul className={clsx(
      styles.List,
      styles[`List--${type}`],
      styles[`List--${className}`]
    )}>
      {items.map((item, index) => {
        if (item) {
          return <li key={`item-${index}`}>{item}</li>
        }
      })}
    </ul>
  );
};
