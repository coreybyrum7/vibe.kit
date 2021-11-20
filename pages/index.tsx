import { useState } from 'react';
import Head from 'next/head'
import { Page, TopNav, Main, Footer } from 'src/sections';

export default function Home() {
  const [ activeSection, setActiveSection ] = useState('home');
  
  return (
    <div>
      <Head>
        <title>React Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        <TopNav />
        <Main setActiveSection={setActiveSection} activeSection={activeSection} />
        <Footer />
      </Page>
    </div>
  )
}
