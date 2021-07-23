import { loadingVariants } from '@variants/index';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import tw from 'twin.macro';

const Loading = () => {
  const router = useRouter();

  return (
    <motion.div
      key={router.route}
      variants={loadingVariants}
      initial='before'
      animate='after'
      css={tw`absolute flex w-screen h-[3px]`}
    >
      <motion.span
        className='bg-gradient'
        variants={{
          before: { width: 0 },
          after: {
            width: '100%',
            transition: {
              ease: [0.87, 0.26, 0.13, 1],
              duration: 1.5,
            },
          },
        }}
      />
      <motion.span
        variants={{
          before: { width: 0 },
          after: {
            width: '100%',
            transition: {
              ease: [0.87, 0.26, 0.13, 1],
              duration: 0.8,
            },
          },
        }}
        css={tw`absolute h-full bg-gray-400`}
      />
    </motion.div>
  );
};

export default Loading;
