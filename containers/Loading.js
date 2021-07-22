import GlitchText from '@components/GlitchText';
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
      css={tw`absolute flex flex-col justify-center items-center gap-y-4 bg-gray-400 w-screen h-screen`}
    >
      <motion.div
        variants={{ before: { opacity: 0 }, after: { opacity: 1 } }}
        css={tw`font-inter font-black`}
      >
        <GlitchText autoplay css={tw`text-7xl`}>
          N
        </GlitchText>
        <span css={tw`text-sm text-gray-100`}>Loading...</span>
      </motion.div>
      <motion.div
        variants={{
          before: { opacity: 0 },
          after: { opacity: 1, transition: { when: 'beforeChildren' } },
        }}
        css={[tw`flex w-60 h-[3px] bg-gray-200`]}
      >
        <motion.span
          className='bg-gradient animate-slide'
          variants={{
            before: { flex: 0 },
            after: {
              flex: 1,
              transition: {
                ease: [0.87, 0, 0.13, 1],
                duration: 0.75,
                delay: 0.4,
              },
            },
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Loading;
