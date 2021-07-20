import Layout from '@containers/Layout';
import '@styles/global.css';
import { GlobalStyles } from 'twin.macro';

const App = ({ Component, pageProps }) => (
  <Layout>
    <GlobalStyles />
    <Component {...pageProps} />
  </Layout>
);

export default App;
