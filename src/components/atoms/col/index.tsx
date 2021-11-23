import clsx from 'clsx';
import styles from './index.module.scss';

export interface ColProps {
  mobileCols: number;
  tabletCols: number;
  desktopCols: number;
  alignVertically?: 'true' | 'false';
}

export const Col: React.FC<ColProps> = ( props ) => {
  const { mobileCols, tabletCols, desktopCols, alignVertically, children } = props;
  return (
    <div className={clsx(
      styles.Col,
      alignVertically ? styles.Col__align_vertically : null,
      styles[`Col--mobile--${mobileCols}`],
      styles[`Col--tablet--${tabletCols}`],
      styles[`Col--desktop--${desktopCols}`],
    )}>
      { children }
    </div>
  );
};
