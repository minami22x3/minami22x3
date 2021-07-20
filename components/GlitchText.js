import styled from '@emotion/styled';
import tw from 'twin.macro';

const Base = styled.p`
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
    clip-path: polygon(0 70%, 100% 20%, 100% 100%, 0 100%);
  }
`;

const GlitchText = ({ children, ...other }) => {
  return (
    <Base
      className='glitch-text'
      data-content={children}
      css={[
        tw`animate-glitch`,
        tw`before:(absolute top-0 left-0 transform translate-x-[-0.025em] translate-y-[-0.025em] opacity-80 animate-glitch)`,
        tw`after:(absolute top-0 left-0 transform translate-x-[0.0125em] translate-y-[0.025em] opacity-80 animate-glitch)`,
      ]}
      {...other}
    >
      {children}
    </Base>
  );
};

export default GlitchText;
