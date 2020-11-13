import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import Form from 'react-bootstrap-range-slider';

const Slider = ({name, label, value, step, onChange, valueName, width, min, max}) => {

  return (

    <div className="form-group ml-2 pb-3">
        <div style={{width:"400px"}}>
          <label className="is-white p-1" htmlFor={name}>{label}</label>
          <input className="slider mb-4"
          type="range"
          name={name}
          min={min}
          max={max}
          step={step}
          value={value}
          id={name}
          onChange={onChange} style={{width:`${width}px`}}/><br/>
          <span className="is-white p-2 mt-2 rounded" style={{border:"2px solid"}}>{valueName} = {value}</span>
        </div>
    </div>
  );

};

export default Slider;