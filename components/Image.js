import NextImage from 'next/image';
import tw, { css } from 'twin.macro';
import PropTypes from 'prop-types';

const Image = ({ src, alt, title, width, ...others }) => {
  return (
    <div
      css={[
        tw`flex items-center h-auto`,
        width
          ? css`
              width: ${width}px;
            `
          : tw`w-full`,
        css`
          & > div {
            all: unset !important;
            display: flex !important;
            align-items: center;
          }
        `,
      ]}
      {...others}
    >
      <NextImage
        layout='fill'
        css={[
          css`
            all: unset !important;
            width: 100% !important;
          `,
        ]}
        {...{ src, alt, title }}
      />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.number,
};

Image.defaultProps = {
  alt: '',
  title: '',
  width: 75,
};

export default Image;
