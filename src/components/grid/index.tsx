import clsx from 'clsx';
import styles from './index.module.scss';

export interface GridProps {
  className?: string;
  mobileCols: number;
  tabletCols: number;
  desktopCols: number;
}

export const Grid: React.FC<GridProps> = props => {
  const { className, mobileCols, tabletCols, desktopCols, children } = props;
  return (
    <div className={clsx(
      styles.Grid,
      styles[`Grid--mobile-${mobileCols}`],
      styles[`Grid--tablet-${tabletCols}`],
      styles[`Grid--desktop-${desktopCols}`],
    )}>
      {children}
    </div>
  );
};
