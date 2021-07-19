import PropTypes from 'prop-types';
import tw from 'twin.macro';

const Button = ({ label, onClick, ...others }) => {
  return (
    <button
      css={[
        tw`self-start relative overflow-hidden px-5 py-3 border border-teal mt-6 text-sm text-teal cursor-pointer hover:before:translate-x-0 lg:text-base xl:px-10`,
        tw`before:(absolute top-0 left-0 transform -translate-x-full w-full h-full bg-teal mix-blend-difference duration-500 ease-in-out)`,
        `::before{content:''}`,
      ]}
      {...{ onClick }}
      {...others}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: 'Button',
  onClick: null,
};

export default Button;
