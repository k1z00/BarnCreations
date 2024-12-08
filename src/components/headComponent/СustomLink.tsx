import React from 'react';
import { Link } from 'react-router-dom';

interface CustomLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  to: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, children, ...props }) => {
  return <Link to={to} {...props}>{children}</Link>;
};

export default CustomLink;