import InfoApp from "./info-app";
import '../../../style/info.scss'
import InfoImg from '@assets/photo/karkasnyj-dom-barnhaus-scaled.webp'
;


interface InfoMainProps {
  targetBlockRef: React.RefObject<HTMLDivElement>;
}



 
const InfoMain: React.FC<InfoMainProps> = ({targetBlockRef}) => {
  return (
    <div className="background-container">  
    <section className="section_info">
    <img src={InfoImg} alt="Barn House" className="background-image" />
      <InfoApp targetBlockRef={targetBlockRef} />
    </section>
  </div>
  );
};

export default InfoMain;