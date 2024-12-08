import CustomLink from "./СustomLink";
import "./head.css";

const HeaderApp: React.FC = () => {
  return (
    <header className="head_container">
      <div className="head_items">
        <div className="head_item_img">
          <img className="item_img"  src="/photo/free-icon-tiny-house-4661011.png" alt="" />
        </div>
        <div className="head_item_link">
          <CustomLink className="link_Main" to="/">About</CustomLink>
          <CustomLink className="link_Main" to="/sell">Sell</CustomLink>
        </div>
      </div>
    </header>
  );
};

export default HeaderApp;
