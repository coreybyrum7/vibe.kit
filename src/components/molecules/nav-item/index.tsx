import styles from './index.module.scss';

import clsx from 'clsx';
// import { GiSoundWaves } from 'react-icons/gi';

export interface NavItemProps {
  name: string,
  displayName: string,
  className?: string,
  href?: string,
  target?: string,
  type?: string,
  activeLink: any
  setActiveLink: any
  setActiveSection: any
}

export const NavItem: React.FC<NavItemProps> = props  => {
  const { 
    name, 
    displayName, 
    className, 
    href, 
    target, 
    activeLink,
    setActiveLink,
    setActiveSection 
  } = props;

  return (
    <div className={styles.NavItem}>
      <h5 
        className={clsx(
          activeLink === name ? styles.NavItem_link_active : '',
          styles.NavItem_link
        )}
        onClick={() => {
          setActiveLink(name)
          setActiveSection(name)
        }}
      >
        { displayName }
      </h5> 
    </div>
  );
};
