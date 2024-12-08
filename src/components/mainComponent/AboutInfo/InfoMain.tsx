import InfoApp from "./InfoApp";
import './InfoStyle/info.css'


const InfoMain: React.FC = () => {
  return (
    <div className="background-container">  
    <section className="section_info">
    <img src="/photo/karkasnyj-dom-barnhaus-scaled.webp" alt="Barn House" className="background-image" />
      <InfoApp />
    </section>
  </div>
  );
};

export default InfoMain;