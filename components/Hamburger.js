import React from 'react';
import MenuIcon from '../public/images/menu.svg';
import CloseIcon from '../public/images/close.svg';
import tw from 'twin.macro';

const Hamburger = ({ isMenuShow, onToggleMenu, ...others }) => {
  return (
    <div
      {...{ onClick: onToggleMenu }}
      css={tw`absolute top-4 right-4 z-20 p-2 rounded-md text-gray-50 bg-gray-500 bg-opacity-50 cursor-pointer duration-300 hover:text-teal xl:hidden`}
      {...others}
    >
      {isMenuShow ? <CloseIcon /> : <MenuIcon />}
    </div>
  );
};

export default Hamburger;
