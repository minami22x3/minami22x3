import Layout from '@containers/Layout';
import '@styles/global.css';
import Head from 'next/head';
import { GlobalStyles } from 'twin.macro';

const App = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <meta
        name='viewport'
        content='initial-scale=1, minimum-scale=1, maximum-scale=1., width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
      />
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </Layout>
);

export default App;
