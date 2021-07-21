import Document, { Html, Head, Main, NextScript } from 'next/document';
import { extractCritical } from '@emotion/server';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = await ctx.renderPage();
    const styles = extractCritical(page.html);
    return { ...initialProps, ...page, ...styles };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='application-name' content='Nathan Nguyen' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='default'
          />
          <meta
            name='apple-mobile-web-app-title'
            content='Nathan Nguyen | Front-end Developer'
          />
          <meta
            name='description'
            content='Freelancer and Front-end Developer. Building responsive website using React.js'
          />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='theme-color' content='#1d1d1d' />
          <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/manifest.json' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@500;700;900&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content='https://nathan22x3.vercel.app/' />
          <meta
            name='twitter:title'
            content='Nathan Nguyen | Front-end Developer'
          />
          <meta
            name='twitter:description'
            content='Freelancer and Front-end Developer. Building responsive website using React.js'
          />
          <meta name='twitter:image' content='/images/logo.png' />
          <meta name='twitter:creator' content='@nathan22x3' />
          <link rel='canonical' href='https://nathan22x3.vercel.app/' />
          <meta property='og:locale' content='vi_VN' />
          <meta property='og:type' content='website' />
          <meta
            property='og:title'
            content='Nathan Nguyen | Front-end Developer'
          />
          <meta
            property='og:description'
            content='Freelancer and Front-end Developer. Building responsive website using React.js'
          />
          <meta property='og:site_name' content='Nathan Nguyen' />
          <meta property='og:url' content='https://nathan22x3.vercel.app/' />
          <meta property='og:image' content='/images/logo.png' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
