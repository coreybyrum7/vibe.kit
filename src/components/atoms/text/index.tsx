import clsx from 'clsx';
import styles from './index.module.scss';

export interface TextProps {
  size: number;
  spacing?: number;
  weight?: 'light' | 'normal' | 'bold';
}

export const Text: React.FC<TextProps> = ({ size, spacing, weight, children }) => {
  return (
    <div className={clsx(
      styles.Text,
      styles[`Text--size-${size}`],
      styles[`Text--spacing-${spacing}`],
      styles[`Text--weight-${weight}`],
    )}>
      {children}
    </div>
  )
}
