import Sidebar from '@containers/Sidebar';
import tw from 'twin.macro';

const Layout = ({ children }) => {
  return (
    <div css={tw`grid grid-cols-[auto 1fr]`}>
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
