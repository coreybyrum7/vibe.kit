// import { FaBeer } from '';
import { GiSoundWaves } from 'react-icons/gi';
import { useState } from 'react';
import styles from './index.module.scss';
import { Button } from 'src/components'

export const Nav = (props) => {

  const { 
    setWelcomeVisible, 
    setSandboxVisible, 
    setProjectsVisible 
  } = props;

  const [ activeItem, setActiveItem ] = useState('home');

  return (
    <div className={styles.Nav}>
      <div className={styles.Nav_left}>
        <a
          className={activeItem === 'sandbox' ? styles.Nav_active : ''}
          onClick={() => {
            setActiveItem('sandbox');
            setWelcomeVisible(false);
            setProjectsVisible(false);
            setSandboxVisible(true);
          }}
        >
          Sandbox
        </a>
        <a
          className={activeItem === 'projects' ? styles.Nav_active : ''}
          onClick={() => {
            setActiveItem('projects');
            setWelcomeVisible(false);
            setSandboxVisible(false);
            setProjectsVisible(true);
          }}
        >
          Projects
        </a>
      </div>
      <div className={styles.Nav_center}>
        <a 
          className={activeItem === 'home' ? styles.Nav_active : ''}
          onClick={() => {
            setActiveItem('home');
            setSandboxVisible(false);
            setProjectsVisible(false);
            setWelcomeVisible(true);
          }}
        >
          <GiSoundWaves />
        </a>
      </div>
      <div className={styles.Nav_right}>
        <a
          className={activeItem === 'resume' ? styles.Nav_active : ''}
          onClick={() => {
            setActiveItem('resume');
          }}
          href="/assets/docs/resume.pdf"
          target="blank"
        >
          Resume
        </a>
        <Button
          type="text-link"
          text="Menu"
          link="/somewhere"
        />
      </div>
    </div> 
  )
}
