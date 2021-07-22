import GlitchText from '@components/GlitchText';
import Link from '@components/Link';
import NextLink from 'next/link';
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
        tw`absolute transform -translate-x-full z-10 flex flex-col justify-between w-screen min-h-screen duration-500 bg-gray-500`,
        tw`xl:(relative translate-x-0 w-[130px])`,
        show && tw`translate-x-0`,
      ]}
    >
      <div css={tw`flex flex-col items-center gap-y-4 py-5 bg-black`}>
        <NextLink href='/' passHref>
          <a
            css={tw`flex flex-col items-center gap-y-1 font-inter font-black !text-white hover:!text-white`}
            onClick={onClose}
          >
            <GlitchText css={tw`text-7xl`}>N</GlitchText>
            <span css={tw`text-xl`}>Nathan</span>
          </a>
        </NextLink>
        <span css={tw`text-xs text-gray-50`}>Web Developer</span>
      </div>
      <div css={tw`flex flex-col divide-y divide-gray-300`}>
        {pages.map(({ label, href }) => (
          <Link key={label} href={href} passHref>
            <a css={tw`py-4 text-center font-medium`} onClick={onClose}>
              {label}
            </a>
          </Link>
        ))}
      </div>
      <div css={tw`flex justify-center gap-x-5 pt-6 pb-24 md:gap-3 xl:py-10`}>
        <a
          href='https://facebook.com/nathan22x3'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FacebookIcon className='social-icon' />
        </a>
        <a
          href='https://linkedin.com/in/nathan22x3'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LinkedinIcon className='social-icon' />
        </a>
        <a
          href='https://github.com/nathan22x3'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHubIcon className='social-icon' />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
