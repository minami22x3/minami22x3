import tw, { css } from 'twin.macro';

const ProgressBar = ({ label, progress, ...others }) => {
  return (
    <div {...others}>
      <div css={tw`flex flex-col gap-y-2`}>
        <span css={tw`text-lg font-bold`}>{label}</span>
        <div
          css={[
            tw`relative h-[3px] bg-gray-200`,
            tw`before:(absolute h-full bg-gradient-to-r from-teal via-purple to-red animate-slide)`,
            css`
              ::before {
                content: '';
                width: ${progress}%;
                background-size: 150%;
                animation-delay: ${progress * 100}ms;
              }
            `,
          ]}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
