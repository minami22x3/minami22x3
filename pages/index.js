import Button from '@components/Button';
import Head from 'next/head';
import tw from 'twin.macro';

const Home = () => {
  return (
    <main css={tw`flex flex-col justify-center gap-y-4 px-10 xl:px-20`}>
      <Head>
        <title>Nathan Nguyen | Front-end Developer</title>
      </Head>

      <h1 css={tw`w-[fit-content] font-inter font-black text-4xl xl:text-8xl`}>
        Hi,
        <br />
        I&apos;m{' '}
        <span
          css={tw`bg-clip-text text-transparent bg-gradient-to-r from-teal via-purple to-red`}
        >
          Nathan
        </span>
        ,
        <br />
        web developer
      </h1>
      <p css={tw`text-gray-100 xl:text-xl`}>Front-end Developer</p>
      <Button label='Contact me!' />
    </main>
  );
};

export default Home;
