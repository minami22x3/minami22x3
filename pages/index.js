import Button from '@components/Button';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import tw, { css } from 'twin.macro';
import { pageVariants } from '@variants/index';

const Home = () => {
  const router = useRouter();

  return (
    <motion.main
      css={tw`flex flex-col justify-center gap-y-4`}
      variants={pageVariants}
      initial='before'
      animate='after'
      exit='exit'
      transition={{ duration: 2 }}
    >
      <Head>
        <title>Nathan Nguyen | Front-end Developer</title>
      </Head>

      <h1 css={tw`w-[fit-content]`}>
        Hi,
        <br />
        I&apos;m{' '}
        <span
          className='text-gradient'
          css={[
            tw`animate-slide`,
            css`
              background-size: 300%;
            `,
          ]}
        >
          Nathan
        </span>
        ,
        <br />
        web developer
      </h1>
      <p css={tw`!m-0 font-semibold text-gray-100 xl:text-xl`}>
        Front-end Developer
      </p>
      <Button label='Contact me!' onClick={() => router.push('/contact')} />
    </motion.main>
  );
};

export default Home;
