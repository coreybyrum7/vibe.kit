import clsx from 'clsx';
import styles from './index.module.scss';
import ChevronRight from 'src/assets/svg/chevron_right.svg';
import HikingGuy from 'src/assets/svg/hiking_guy.svg';
import Surfboard from 'src/assets/svg/surfboard.svg';
import Dog from 'src/assets/svg/dog.svg';
import Code from 'src/assets/svg/code.svg';
import Travel from 'src/assets/svg/travel.svg';
import JS from 'src/assets/svg/js.svg';
import CSS from 'src/assets/svg/css.svg';
import Settings from 'src/assets/svg/settings.svg';
import Tick from 'src/assets/svg/tick.svg';

export interface IconProps {
  name: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  return (
    <div className={clsx(
      styles.Icon,
      styles[`Icon--${className}`]
    )}>
      {
        name == "ChevronRight" ? <ChevronRight /> 
        : name == "HikingGuy" ? <HikingGuy /> 
        : name == "Surfboard" ? <Surfboard />
        : name == "Dog" ? <Dog />
        : name == "Code" ? <Code />
        : name == "Travel" ? <Travel />
        : name == "JS" ? <JS />
        : name == "CSS" ? <CSS />
        : name == "Settings" ? <Settings />
        : name == "Tick" ? <Tick />
        : null
      }
    </div>
  );
};
