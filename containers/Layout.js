import Sidebar from '@containers/Sidebar';
import tw from 'twin.macro';

const Layout = ({ children }) => {
  return (
    <div
      css={tw`overflow-x-hidden grid grid-cols-[auto 1fr] min-h-screen font-poppins text-white bg-gray-400`}
    >
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
