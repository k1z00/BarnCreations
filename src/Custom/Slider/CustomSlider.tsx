import React from 'react';
import ReactSlider from 'react-slider';



interface SliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (values: [number, number]) => void;
}

const CustomSlider: React.FC<SliderProps> = ({ min, max, value, onChange }) => {


  return (
    <>
      <ReactSlider
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        renderThumb={(props) => <div {...props} className="thumb" />}
        renderTrack={(props) => <div {...props} className="track" />}
      />
       </>
  );
};

export default CustomSlider