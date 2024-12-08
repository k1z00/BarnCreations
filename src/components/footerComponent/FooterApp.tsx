import FooterMap from "./FooterMap";
import SocialLink from "./FooterSocialLink";

const socialArray = [
  { id: 1, href: "https://vk.com/id851485203", src: "/photo/vk.png" },
  {
    id: 2,
    href: "https://web.telegram.org/k/#@gftW21",
    src: "/photo/telegram.png",
  },
  { id: 3, href: "https://www.instagram.com/", src: "/photo/instagram.png" },
];

const FooterApp: React.FC = () => {
  return (
    <div className="footer_container">
      <div className="footer_items">
        <div>
          <ContactInfo />
        </div>
        <div className="footer_social">
          <SocialLink arr={socialArray} />
        </div>
      </div>
      <div className="footer_map">
        <FooterMap />
      </div>
    </div>
  );
};

const ContactInfo: React.FC = () => (
  <div>
    <h1 className="footer_item_title">Как с нами связаться</h1>
    <p className="footer_item_text">
      Придти в офис и получить информацию очно <br />
      по адресу ул. Аэродромная, 47А, Самара, 3 этаж
    </p>
    <p className="footer_item_text">
      Написать нам на почту: kvn2001@internet.ru
    </p>
    <p className="footer_item_text">Написать нам в Соц-Сети</p>
  </div>
);

export default FooterApp;
