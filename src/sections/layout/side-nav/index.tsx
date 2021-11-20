import clsx from 'clsx';
import { useState } from 'react';

import { foundations, components } from 'src/core/data';
import { Section, NavLink, Title } from 'src/components'

import styles from './index.module.scss';

export const SideNav = (props) => {

  const { 
    className,
    id,
    setActiveSection
  } = props;

  const [ activeLink, setActiveLink ] = useState('home');

  return (
    <Section className={clsx(styles.Section, className)} id={id}>
      <div className={styles.SideNav}>

        <div className={styles.SideNav_group}>
          <h5 className={styles.SideNav_title}>Introduction</h5>
        </div>

        <div className={styles.SideNav_group}>
          <h5 className={styles.SideNav_title}>Foundations</h5>
          {foundations.map(foundation => {
            return (
              <NavLink
                key={foundation.name}
                name={foundation.name}
                displayName={foundation.displayName}
                type={foundation.type}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
                setActiveSection={setActiveSection}
              />
            )
          })}
        </div>

        <div className={styles.SideNav_group}>
          <h5 className={styles.SideNav_title}>Components</h5>
          {components.map(componentType => {
            return (
              <div>
                <h5 className={styles.SideNav_subtitle}>{componentType.displayName}</h5>
                {componentType.components.map(component => {
                  return (
                    <NavLink
                      key={component.name}
                      name={component.name}
                      displayName={component.displayName}
                      type={component.type}
                      activeLink={activeLink}
                      setActiveLink={setActiveLink}
                      setActiveSection={setActiveSection}
                    />
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
