import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Children, cloneElement } from 'react';
import tw from 'twin.macro';

const Link = ({ children, ...props }) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childCSS = children.props.css;

  const css =
    asPath === props.href || asPath === props.as
      ? [childCSS, tw`!text-teal`]
      : childCSS;

  return <NextLink {...props}>{cloneElement(child, { css })}</NextLink>;
};

export default Link;
