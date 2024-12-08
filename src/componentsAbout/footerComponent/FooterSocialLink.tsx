import { useState } from "react";

interface ISocial {
  id: number;
  href: string;
  src: string;
}
interface SocialLinkProps {
  arr: ISocial[];
}

const SocialLink: React.FC<SocialLinkProps> = ({ arr }) => {
  const [social, setSocial] = useState<ISocial[]>(arr);

  return (
    <>
      {social.map((social) => (
        <a key={social.id} href={social.href}>
          <img src={social.src} alt={`Social link ${social.id}`} />
        </a>
      ))}
    </>
  );
};

export default SocialLink;
