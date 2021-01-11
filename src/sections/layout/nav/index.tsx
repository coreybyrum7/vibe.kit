import { navItems } from 'src/core/data';
import { Button, NavLink } from 'src/components'

import { useState } from 'react';
import styles from './index.module.scss';

export const Nav = (props) => {

  const { 
    setActiveSection
  } = props;

  const [ activeLink, setActiveLink ] = useState('home');

  return (
    <div className={styles.Nav}> 
      {navItems.map(navItem => {
        return (
          <NavLink
            key={navItem.name}
            name={navItem.name}
            linkName={navItem.linkName}
            className={''}
            href={navItem.href}
            target={navItem.target}
            type={navItem.type}
            location={navItem.location}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            setActiveSection={setActiveSection}
          />
        )
      })}
    </div> 
  )
}
