import Head from 'next/head';
import { GlobalStyle } from '../styles/GlobalStyles';

import ContactPage from '../template/Contact';
import StartPage from '../template/Page';

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title> Felipe Fernandes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet">
        </link>
      </Head>
      <StartPage />
      <ContactPage />
    </div>
  )
};
