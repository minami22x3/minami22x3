import GlitchText from '@components/GlitchText';
import Head from 'next/head';
import Link from 'next/link';
import tw from 'twin.macro';

const NotFound = () => {
  return (
    <main css={tw`flex flex-col justify-center gap-y-4`}>
      <Head>
        <title>Page not found | Nathan Nguyen</title>
      </Head>

      <h1>
        <GlitchText>404</GlitchText>
        Page not found
      </h1>
      <p css={tw`my-4 xl:text-xl`}>
        Ooops... Look like the page you were looking does not exist...
      </p>
      <Link href='/' passHref>
        <a css={tw`self-start text-gray-100 text-sm`}>
          {'\u27f5 Go back home'}
        </a>
      </Link>
    </main>
  );
};

export default NotFound;
