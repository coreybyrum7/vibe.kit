import { useState } from 'react';
import Head from 'next/head'
import { Nav, Footer, Sandbox, Welcome, Projects } from 'src/sections';
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [welcomeVisible, setWelcomeVisible] = useState(true);
  const [sandboxVisible, setSandboxVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  
  return (
    <div className={styles.Container}>
      <Head>
        <title>React Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.Main}>
        <Nav
          setWelcomeVisible={setWelcomeVisible}
          setSandboxVisible={setSandboxVisible}
          setProjectsVisible={setProjectsVisible}
        />
        <Welcome isVisible={welcomeVisible} />
        <Sandbox isVisible={sandboxVisible} />
        <Projects isVisible={projectsVisible} />
      </main>

      <footer className={styles.Footer}>
          <Footer />
      </footer>
    </div>
  )
}
