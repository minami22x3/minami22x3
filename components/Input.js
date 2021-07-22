import tw from 'twin.macro';
import PropTypes from 'prop-types';

const Input = ({
  name,
  type,
  value,
  placeholder,
  multiline,
  rows,
  error,
  disabled,
  onChange,
  ...others
}) => {
  return (
    <div
      css={[
        tw`relative bg-gray-300 focus-within:before:w-full`,
        tw`before:(absolute left-0 bottom-0 w-0 h-[2px] bg-teal duration-500)`,
        `::before{content: ''}`,
        error && tw`before:bg-red`,
      ]}
      {...others}
    >
      {!multiline ? (
        <input {...{ name, type, value, placeholder, disabled, onChange }} />
      ) : (
        <textarea
          {...{ name, type, value, placeholder, rows, disabled, onChange }}
          css={tw`resize-none`}
        />
      )}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  name: 'input',
  type: 'text',
  value: '',
  placeholder: 'Placeholder',
  multiline: false,
  rows: 5,
  error: false,
  disabled: false,
  onChange: null,
};

export default Input;
