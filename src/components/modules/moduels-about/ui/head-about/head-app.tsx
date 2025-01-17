import CustomLink from './custom-link';
import "../../style/head.scss";
import NavImgHeader from '/photo/free-icon-tiny-house-4661011.png'


const HeaderApp: React.FC = () => {
  return (
    <header className="head_container">
      <div className="head_items">
        <div className="head_item_img">
          <img className="item_img"  src={NavImgHeader} alt="" />
        </div>
        <div className="head_item_link">
          <CustomLink className="link_Main" to="BarnCreations/">About</CustomLink>
          <CustomLink className="link_Main" to="BarnCreations/sell">Sell</CustomLink>
        </div>
      </div>
    </header>
  );
};

export default HeaderApp;
