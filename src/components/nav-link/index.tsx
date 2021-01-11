import styles from './index.module.scss';

import clsx from 'clsx';
import { GiSoundWaves } from 'react-icons/gi';

export interface NavLinkProps {
  name: string,
  linkName: string,
  location: string,
  className?: string,
  href?: string,
  target?: string,
  type?: string,
  activeLink: any
  setActiveLink: any
  setActiveSection: any
}

export const NavLink: React.FC<NavLinkProps> = props  => {
  const { 
    name, 
    linkName, 
    className, 
    href, 
    target, 
    type, 
    location, 
    activeLink,
    setActiveLink,
    setActiveSection 
  } = props;

  return (
    <div 
      className={clsx(
        styles.NavLink_link,
        styles[`NavLink_link_${name}`],
      )}
    >
      <a 
        className={clsx(
          activeLink === name ? styles.NavLink_link_active : ''
        )}
        onClick={() => {
          setActiveLink(name);
          (name === 'resume' || name === 'github') ? window.open(href, target) : setActiveSection(name);
        }}
      >
        { name === 'home' ? <GiSoundWaves /> : linkName }
      </a> 
    </div>
  );
};
