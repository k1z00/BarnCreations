import ProductSell from "./modules-sell/ui/main-sell/product-sell/prosuct-sell";
import SideBar from "./modules-sell/ui/sidebar-sell/sidebar-app";
import "./modules-sell/style/sell.scss";

const SellApp: React.FC = () => {
  return (
    <>
      <div className="sell_container">
        <div className="product_head">
          <h2 className="producthead_title">Дома в стиле Бархаус</h2>
        </div>

        <div className="sell_items">
          <SideBar />
          <ProductSell />
        </div>
      </div>
    </>
  );
};

export default SellApp;
