import PropTypes from 'prop-types';
import tw from 'twin.macro';

const Button = ({ label, type, onClick, ...others }) => {
  return (
    <button
      css={[
        tw`self-start relative overflow-hidden px-5 py-3 border border-teal outline-none mt-6 text-sm font-medium text-teal cursor-pointer hover:before:translate-x-0 lg:text-base xl:px-10`,
        tw`before:(absolute inset-0 transform -translate-x-full w-[101%] h-full bg-teal mix-blend-difference duration-500 ease-in-out)`,
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
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: 'Button',
  type: 'button',
  onClick: null,
};

export default Button;
