import Image from '@components/Image';
import Link from 'next/link';
import tw from 'twin.macro';
import FacebookIcon from '../public/images/facebook.svg';
import GitHubIcon from '../public/images/github.svg';
import LinkedinIcon from '../public/images/linkedin.svg';

const pages = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
];

const Sidebar = ({ show, onClose }) => {
  return (
    <aside
      css={[
        tw`transform -translate-x-full absolute z-10 flex flex-col justify-between w-screen h-screen duration-500 bg-gray-500 xl:(relative w-[130px])`,
        show && tw`translate-x-0`,
      ]}
    >
      <div css={tw`flex flex-col items-center gap-y-4 py-5 bg-black`}>
        <Link href='/' passHref>
          <a
            css={tw`flex flex-col items-center gap-y-1 hover:text-white`}
            onClick={onClose}
          >
            <Image src='/images/logo.png' alt='Logo' width={75} />
            <span css={tw`font-inter font-black text-xl`}>Nathan</span>
          </a>
        </Link>
        <span css={tw`text-xs text-gray-50`}>Web Developer</span>
      </div>
      <div css={tw`flex flex-col divide-y divide-gray-300`}>
        {pages.map(({ label, href }) => (
          <Link key={label} href={href} passHref>
            <a
              css={tw`py-4 text-center font-medium text-gray-100`}
              onClick={onClose}
            >
              {label}
            </a>
          </Link>
        ))}
      </div>
      <div css={tw`flex justify-center gap-x-3 py-10`}>
        <a
          href='http://facebook.com/nathan22x3'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FacebookIcon />
        </a>
        <a
          href='http://linkedin.com/in/nathan22x3'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LinkedinIcon />
        </a>
        <a
          href='http://github.com/nathan22x3'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHubIcon />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
