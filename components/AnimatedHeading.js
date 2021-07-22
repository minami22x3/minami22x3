import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import tw from 'twin.macro';

const AnimatedHeading = ({ content, ...others }) => {
  return (
    <motion.h2
      initial='before'
      animate='after'
      variants={{
        after: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 1.5,
          },
        },
      }}
      css={tw`mb-8`}
      {...others}
    >
      {content.split('').map((letter, idx) =>
        letter === '\n' ? (
          <br key={`${idx}`} />
        ) : letter === ' ' ? (
          <span key={`${idx}`}> </span>
        ) : (
          <motion.span
            key={`${letter}-${idx}`}
            variants={{
              before: { display: 'inline-block', opacity: 0, scale: 0 },
              after: {
                opacity: 1,
                scale: [0.54, 1.12, 1.18, 1.03, 0.95, 0.97, 1.01, 1],
                transition: {
                  type: 'spring',
                  duration: 0.65,
                  bounce: 0.5,
                },
              },
            }}
            whileHover={{
              scaleX: [1, 1.1, 0.8, 1.1, 0.86, 0.94, 1],
              scaleY: [1, 0.7, 1.15, 0.8, 1.05, 0.86, 1],
              transition: {
                ease: [0.99, 0.37, 0.16, 1.14],
                duration: 0.65,
              },
            }}
          >
            {letter}
          </motion.span>
        )
      )}
    </motion.h2>
  );
};

AnimatedHeading.propTypes = {
  content: PropTypes.string,
};

AnimatedHeading.defaultProps = {
  content: '',
};

export default AnimatedHeading;
