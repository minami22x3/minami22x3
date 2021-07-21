import Hamburger from '@components/Hamburger';
import Loading from '@containers/Loading';
import Sidebar from '@containers/Sidebar';
import { useEffect, useState } from 'react';
import tw from 'twin.macro';

const Layout = ({ children }) => {
  const [isMenuShow, setIsMenuShow] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuShow(!isMenuShow);
  };

  useEffect(() => {
    document.body.style.overflowY = isMenuShow ? 'hidden' : '';
  }, [isMenuShow]);

  return (
    <div css={tw`overflow-hidden relative grid grid-cols-[auto 1fr] h-screen`}>
      <Sidebar show={isMenuShow} onClose={() => setIsMenuShow(false)} />
      <Hamburger isMenuShow={isMenuShow} onToggleMenu={handleToggleMenu} />
      {children}
      <Loading />
    </div>
  );
};

export default Layout;
