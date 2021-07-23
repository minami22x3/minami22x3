import AnimatedText from '@components/AnimatedText';
import ProgressBar from '@components/ProgressBar';
import { pageVariants, rubberTextVariants } from '@variants/index';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import tw from 'twin.macro';

const skills = [
  { name: 'Front-end', progress: 65 },
  { name: 'Back-end', progress: 35 },
  { name: 'Mobile', progress: 30 },
];

const experiences = [
  {
    role: 'Student',
    place: 'University of Economics & Finance',
    from: new Date(2018, 9),
    to: new Date(),
    detail:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos magni cumque laborum.',
  },
];

const formatDate = (date = new Date()) => {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  });
};

const Skills = () => {
  return (
    <motion.main
      className='col-2'
      variants={pageVariants}
      initial='before'
      animate='after'
      exit='exit'
    >
      <Head>
        <title>Skills & Experiences | Nathan Nguyen</title>
      </Head>

      <section>
        <motion.h2
          initial='before'
          animate='after'
          variants={rubberTextVariants}
        >
          <AnimatedText content={`Skills &\nExperience`} />
        </motion.h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nulla
          ullam molestiae doloremque sit cumque error? Fugit qui fugiat vitae
          repellat veritatis, asperiores ipsam doloribus repudiandae consectetur
          omnis voluptatum aliquam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quo,
          natus repudiandae laboriosam fugiat reprehenderit animi vitae omnis
          esse nobis sapiente? Itaque, maiores? Culpa cum quibusdam cumque
          accusamus quia eveniet, cupiditate mollitia doloribus vitae sint.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          sequi soluta facere esse blanditiis a!
        </p>
        <p>
          Visit my{' '}
          <a
            href='https://www.linkedin.com/in/nathan22x3'
            target='_blank'
            rel='noopener noreferrer'
            className='link'
          >
            LinkedIn
          </a>{' '}
          profile for more details or just{' '}
          <Link href='/contact' passHref>
            <a className='link'>contact</a>
          </Link>{' '}
          me.
        </p>
      </section>
      <section>
        <div css={tw`flex flex-col gap-y-6 mb-12`}>
          {skills.map(({ name, progress }) => (
            <ProgressBar key={name} label={name} progress={progress} />
          ))}
        </div>
        <div css={tw`grid grid-cols-1 lg:grid-cols-2`}>
          {experiences.map(({ role, place, from, to, detail }) => (
            <div key={role} css={tw`p-5 bg-gray-300`}>
              <h4>{role}</h4>
              <p css={tw`leading-snug text-gray-50`}>
                {place}
                <br />
                <small>{`${formatDate(from)} - ${formatDate(to)}`}</small>
              </p>
              <p css={tw`leading-snug`}>{detail}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.main>
  );
};

export default Skills;
