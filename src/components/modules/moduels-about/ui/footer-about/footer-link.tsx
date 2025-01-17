import React from "react";

interface ISocial {
  id: number;
  href: string;
  src: string;
}

interface SocialLinkProps {
  arr: ISocial[];
}

const SocialLink: React.FC<SocialLinkProps> = ({ arr }) => {
  return (
    <>
      {arr.map((social) => (
        <a key={social.id} href={social.href}>
          <img src={social.src} alt={`Social link ${social.id}`} />
        </a>
      ))}
    </>
  );
};

export default SocialLink;

