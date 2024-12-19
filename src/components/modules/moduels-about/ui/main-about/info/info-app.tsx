import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../../shared/store/index";
import { setShouldScrollToTarget } from "../../../shared/slice/SliceAbout"

interface InfoAppProps {
  targetBlockRef: React.RefObject<HTMLDivElement>;
}



const InfoApp: React.FC<InfoAppProps> = ({targetBlockRef}) => {
  const dispatch = useAppDispatch();
  const shouldScrollToTarget = useAppSelector((state) => state.scroll.shouldScrollToTarget);

;

  React.useEffect(() => {
    if (shouldScrollToTarget && targetBlockRef.current) {
      targetBlockRef.current.scrollIntoView({ behavior: 'smooth' });
      dispatch(setShouldScrollToTarget(false));
    }
  }, [shouldScrollToTarget, dispatch]);

  const handleScrollToTarget = () => {
    dispatch(setShouldScrollToTarget(true));
  };


  return (
    <div className="info_container">
      <div className="info_items">
        <div>
          <h1 className="info_items_title">
            Добро пожаловать в BarnCreations
          </h1>
          <p className="info_items_text">
            Мы специализируемся на проектировании и строительстве современных
            загородных домов, вдохновленных традиционными амбарами, которые
            сочетает в себе элементы rustic и contemporary стилей. Наша цель —
            создать пространство, в котором вы сможете наслаждаться комфортом и
            гармонией с природой.
          </p>
        </div>
        <div className="info_link">
          <button onClick={handleScrollToTarget} className="info_link_button">Связь с нами</button>
        </div>
        <div></div>
      </div>
    
    </div>
  );
};

export default InfoApp;