import { pageVariants } from '@variants/index';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import tw from 'twin.macro';

const About = () => {
  return (
    <motion.main
      className='col-2'
      variants={pageVariants}
      initial='before'
      animate='after'
      exit='exit'
      transition={{ duration: 1 }}
    >
      <Head>
        <title>About | Nathan Nguyen</title>
      </Head>

      <section>
        <h2 css={tw`mb-8`}>My self</h2>
        <p>
          I&apos;m currently a Junior Student at{' '}
          <a
            href='https://uef.edu.vn/'
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            University of Economics and Finance
          </a>{' '}
          in Ho Chi Minh City, Vietnam. I have a great passion for full-stack
          web development, UI effects and animations.
        </p>
        <p>
          Problem solver, well-organised, independent person with high attention
          to detail. Interested in the entire frontend spectrum and working on
          ambitious projects with positive people.
        </p>
        <Link href='/contact' passHref>
          <a className='link'>Let’s make something special!</a>
        </Link>
      </section>
      <section></section>
    </motion.main>
  );
};

export default About;
