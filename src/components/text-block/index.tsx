import clsx from 'clsx';
import styles from './index.module.scss';

export interface TextBlockProps {
  size: number;
  spacing?: number;
  weight?: 'light' | 'normal' | 'bold';
}

export const TextBlock: React.FC<TextBlockProps> = ({ size, spacing, weight, children }) => {
  return (
    <div className={clsx(
      styles.TextBlock,
      styles[`TextBlock--size-${size}`],
      styles[`TextBlock--spacing-${spacing}`],
      styles[`TextBlock--weight-${weight}`],
    )}>
      {children}
    </div>
  )
}
