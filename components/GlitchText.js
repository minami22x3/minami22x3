import styled from '@emotion/styled';
import tw from 'twin.macro';

const Base = styled.span`
  ::before,
  ::after {
    content: attr(data-content);
  }

  ::before {
    animation-duration: 650ms !important;
    clip-path: polygon(0 0, 100% 0, 100% 25%, 0 50%);
  }

  ::after {
    animation-duration: 375ms !important;
    clip-path: polygon(0 65%, 100% 55%, 100% 100%, 0 100%);
  }
`;

const GlitchText = ({ autoplay, children, ...others }) => {
  return (
    <div {...others}>
      <Base
        className='text-glitch'
        data-content={children}
        css={[
          tw`block hover:animate-glitch`,
          tw`before:(absolute top-0 left-0 transform translate-x-[-0.025em] translate-y-[-0.025em] opacity-80 hover:animate-glitch)`,
          tw`after:(absolute top-0 left-0 transform translate-x-[0.025em] translate-y-[0.025em] opacity-80 hover:animate-glitch)`,
          autoplay &&
            tw`animate-glitch before:animate-glitch after:animate-glitch`,
        ]}
      >
        {children}
      </Base>
    </div>
  );
};

export default GlitchText;
