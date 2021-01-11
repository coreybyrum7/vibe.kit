import { useState } from 'react';
import Head from 'next/head'
import { Nav, Footer, Sandbox, Welcome, Projects } from 'src/sections';
import styles from '../styles/Home.module.scss'

export default function Home() {
  const [ activeSection, setActiveSection ] = useState('home');
  
  return (
    <div className={styles.Container}>
      <Head>
        <title>React Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.Main}>
        <Nav
          setActiveSection={setActiveSection}
        />
        <Sandbox visible={activeSection == 'sandbox' ? true : false} />
        <Projects visible={activeSection == 'projects' ? true : false} />
        <Welcome visible={activeSection == 'home' ? true : false} />
      </main>

      <footer className={styles.Footer}>
          <Footer />
      </footer>
    </div>
  )
}
