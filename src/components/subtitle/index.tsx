import clsx from 'clsx';
import styles from './index.module.scss'

export interface SubtitleProps {
    size: number;
    subHeadingText: string;
    alignment: string;
    color?: string;
}

export const Subtitle: React.FC<SubtitleProps> = (props) => {
  const { size, subHeadingText, alignment, color } = props;
    return (
        <div 
          className={clsx(
            styles.Subtitle,
            styles[`Subtitle--size-${size}`],
            styles[`Subtitle--align-${alignment}`],
            styles[`Subtitle--${color}`]
          )}
        >
          {subHeadingText}
        </div>
    )
}
