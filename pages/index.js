import AnimatedText from '@components/AnimatedText';
import Button from '@components/Button';
import {
  fadeUpVariants,
  pageVariants,
  rubberTextVariants,
} from '@variants/index';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import tw from 'twin.macro';

const Home = () => {
  const router = useRouter();

  return (
    <motion.main
      css={tw`flex flex-col justify-center gap-y-4`}
      variants={pageVariants}
      initial='before'
      animate='after'
      exit='exit'
    >
      <Head>
        <title>Nathan Nguyen | Front-end Developer</title>
      </Head>

      <motion.h1 initial='before' animate='after' variants={rubberTextVariants}>
        <AnimatedText content={`Hi,\nI'm Nathan,\nweb developer`} />
      </motion.h1>
      <motion.p
        variants={fadeUpVariants}
        css={tw`!m-0 font-semibold text-gray-100 xl:text-xl`}
      >
        Front-end Developer
      </motion.p>
      <motion.div variants={fadeUpVariants}>
        <Button label='Contact me!' onClick={() => router.push('/contact')} />
      </motion.div>
    </motion.main>
  );
};

export default Home;
