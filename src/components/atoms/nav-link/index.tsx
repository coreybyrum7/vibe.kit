import styles from './index.module.scss';

import clsx from 'clsx';
// import { GiSoundWaves } from 'react-icons/gi';

export interface NavLinkProps {
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

export const NavLink: React.FC<NavLinkProps> = props  => {
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
    <div className={styles.NavLink}>
      <h5 
        className={clsx(
          activeLink === name ? styles.NavLink_link_active : '',
          styles.NavLink_link
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
