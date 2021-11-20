import { Sandbox, Welcome, Projects } from 'src/sections';

import { useState } from 'react';
import styles from './index.module.scss';

export const Body = ({ activeSection }) => {

  const [ activeLink, setActiveLink ] = useState('home');

  return (
    <div className={styles.Body}>
      <Sandbox visible={activeSection == 'sandbox' ? true : false} />
      <Projects visible={activeSection == 'projects' ? true : false} />
      <Welcome visible={activeSection == 'home' ? true : false} />
    </div>
  )
}
