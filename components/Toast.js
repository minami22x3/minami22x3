import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import tw from 'twin.macro';
import CloseIcon from '../public/images/close.svg';
import DangerIcon from '../public/images/danger.svg';
import InfoIcon from '../public/images/info.svg';
import SuccessIcon from '../public/images/success.svg';
import WarningIcon from '../public/images/warning.svg';

const Toast = ({
  title,
  message,
  type,
  position = '',
  autoClose,
  dismissTime,
  onClose,
  ...others
}) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (autoClose) onClose();
    }, dismissTime);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      variants={{
        before: {
          opacity: 0,
          translateX: position.endsWith('r') ? 40 : -40,
          transition: { duration: 0.5 },
        },
        after: { opacity: 1, translateX: 0, transition: { duration: 0.5 } },
      }}
      initial='before'
      animate='after'
      exit='before'
      css={[
        tw`fixed z-50 flex gap-x-3 p-4 text-gray-500 ease-in-out`,
        type === 'info' && tw`bg-teal`,
        type === 'success' && tw`bg-green`,
        type === 'warning' && tw`bg-yellow`,
        type === 'danger' && tw`bg-red`,

        position === 'tl' && tw`top-6 left-6`,
        position === 'tr' && tw`top-6 right-6`,
        position === 'br' && tw`bottom-6 right-6`,
        position === 'bl' && tw`bottom-6 left-6`,
      ]}
      {...others}
    >
      <div css={tw`mt-1`}>
        {type === 'success' ? (
          <SuccessIcon />
        ) : type === 'warning' ? (
          <WarningIcon />
        ) : type === 'danger' ? (
          <DangerIcon />
        ) : (
          <InfoIcon />
        )}
      </div>
      <div css={tw`flex flex-col max-w-[250px] mr-10`}>
        <span css={[tw`font-semibold text-lg`]}>{title}</span>
        <span>{message}</span>
        <CloseIcon
          css={tw`absolute top-3 right-3 w-6 h-6 cursor-pointer`}
          onClick={onClose}
        />
      </div>
    </motion.div>
  );
};

Toast.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'danger']),
  position: PropTypes.oneOf(['tl', 'tr', 'br', 'bl']),
  autoClose: PropTypes.bool,
  dismissTime: PropTypes.number,
};

Toast.defaultProps = {
  title: 'Title',
  message: 'Message',
  type: 'info',
  position: 'br',
  autoClose: true,
  dismissTime: 5000,
};

export default Toast;
