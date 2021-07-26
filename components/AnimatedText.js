import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import tw from 'twin.macro';

const AnimatedText = ({ content }) => {
  const handleLetterAnimation = ({ target }) => {
    target.classList.add('animate-rubber-band');
    target.addEventListener('animationend', function () {
      this.classList.remove('animate-rubber-band');
    });
  };

  return (
    <>
      {content.split('').map((letter, idx) =>
        letter === '\n' ? (
          <br key={`${idx}`} />
        ) : letter === ' ' ? (
          <span key={`${idx}`}> </span>
        ) : (
          <motion.span
            key={`${letter}-${idx}`}
            variants={{
              before: { opacity: 0, scaleX: 0, scaleY: 0 },
              after: {
                opacity: 1,
                scaleX: [1, 1.05, 0.75, 1.25, 1.05, 1],
                scaleY: [1, 0.75, 1, 0.8, 0.95, 1],
                transition: { duration: 0.45 },
              },
            }}
            css={tw`inline-block !font-inter hover:(duration-300 text-teal)`}
            onMouseOver={handleLetterAnimation}
          >
            {letter}
          </motion.span>
        )
      )}
    </>
  );
};

AnimatedText.propTypes = {
  content: PropTypes.string,
};

AnimatedText.defaultProps = {
  content: '',
};

export default AnimatedText;
