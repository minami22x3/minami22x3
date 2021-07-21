import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import tw from 'twin.macro';

const Loading = () => {
  const router = useRouter();

  return (
    <motion.div
      key={router.route}
      initial='before'
      animate='after'
      exit='exit'
      variants={{
        after: {
          translateX: ['-100%', '0%', '100%'],
          transition: {
            delay: 0.5,
            easings: 'anticipate',
            duration: 2,
          },
        },
      }}
      css={tw`absolute bg-gray-500 w-screen h-screen`}
    ></motion.div>
  );
};

export default Loading;
