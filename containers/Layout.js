import Hamburger from '@components/Hamburger';
import Sidebar from '@containers/Sidebar';
import { useState } from 'react';
import tw from 'twin.macro';

const Layout = ({ children }) => {
  const [isMenuShow, setIsMenuShow] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuShow(!isMenuShow);
  };

  return (
    <div css={tw`relative grid grid-cols-[auto 1fr] overflow-x-hidden`}>
      <Sidebar show={isMenuShow} onClose={() => setIsMenuShow(false)} />
      <Hamburger isMenuShow={isMenuShow} onToggleMenu={handleToggleMenu} />
      {children}
    </div>
  );
};

export default Layout;
