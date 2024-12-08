import InfoApp from "./InfoApp";
import '../../StyleAbout/info.scss'
import InfoImg from '@assets/photo/karkasnyj-dom-barnhaus-scaled.webp'


const InfoMain: React.FC = () => {
  return (
    <div className="background-container">  
    <section className="section_info">
    <img src={InfoImg} alt="Barn House" className="background-image" />
      <InfoApp />
    </section>
  </div>
  );
};

export default InfoMain;