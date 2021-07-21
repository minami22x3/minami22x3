import Layout from '@containers/Layout';
import '@styles/global.css';
import Head from 'next/head';
import { GlobalStyles } from 'twin.macro';
import { AnimatePresence } from 'framer-motion';

const App = ({ Component, pageProps, router }) => (
  <Layout>
    <Head>
      <meta
        name='viewport'
        content='initial-scale=1, maximum-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
      />
    </Head>
    <GlobalStyles />
    <AnimatePresence exitBeforeEnter>
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
  </Layout>
);

export default App;
