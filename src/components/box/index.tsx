import clsx from 'clsx';
import styles from './index.module.scss';

export interface BoxProps {
  numColumns: number;
  alignVertically?: 'true' | 'false';
}

export const Box: React.FC<BoxProps> = ( props ) => {
  const { numColumns, alignVertically, children } = props;
  return (
    <div className={clsx(
      styles.Box,
      alignVertically ? styles.Box__align_vertically : null,
      styles[`Box--${numColumns}`]
    )}>
      { children }
    </div>
  );
};
