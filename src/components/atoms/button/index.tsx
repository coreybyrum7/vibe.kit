import clsx from 'clsx';
import styles from './index.module.scss';

export interface ButtonProps {
  type: 'text-link' | 'default';
  text: string;
  link: string;
}

export const Button: React.FC<ButtonProps> = props => {
  const { type, text, link } = props;
  return (
    <a 
      className={clsx(
        styles.Button,
        styles[`Button-${type}`],
      )}
    >
      {text}
    </a>
  );
};
