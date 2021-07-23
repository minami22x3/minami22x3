import { motion } from 'framer-motion';
import tw, { css } from 'twin.macro';

const ProgressBar = ({ label, progress, ...others }) => {
  return (
    <div {...others}>
      <div css={tw`flex flex-col gap-y-2`}>
        <span css={tw`text-lg font-bold`}>{label}</span>
        <div css={[tw`flex h-[3px] bg-gray-200`]}>
          <motion.span
            css={[
              tw`bg-gradient-to-r from-teal via-purple to-red animate-slide`,
              css`
                background-size: 150%;
                animation-delay: ${progress * 100}ms;
              `,
            ]}
            variants={{
              before: { flex: 0 },
              after: {
                flex: progress / 100,
                transition: {
                  ease: [0.87, 0, 0.13, 1],
                  duration: 1.5,
                  delay: 0.5,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
