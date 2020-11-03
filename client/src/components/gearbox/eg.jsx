import React, { Component } from 'react';
import '../../style/gearbox/srg.css';
import Dropdown from 'semantic-ui-react';
import {gearProcesses} from '../common/solverOptions';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from 'react-router-dom';

import Input from '../common/input';
function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);
export default class Srg extends Component {

    state = {
        processes : gearProcesses()
    }
    render() {

        return (
            <form >
                <div className="row m-0">
<div className="col-md-6 l">
                        <div id="firstRow" className="row background-2 border m-5 justify-content-around first-row">
                            <div className="col-md-12 border-bottom border-warning mb-4 mt-2 p-3 is-white text-left" style={{fontSize:"35px", fontWeight:"600", fontFamily:"Fira Code"}}>
                                <span>Loading</span>
                            </div>
                            <Input name="rpm" label="Motor/Engine RPM" placeholder="max RPM"/>
                            <Input name="torque" label="Motor/Engine torque" placeholder="max torque (N-m)"/>
                            <Input name="power" label="Motor/Engine power" placeholder="max power (KW)"/>
                            <div className="col-md-12 is-white"><h2 className=" text-left m-5 is-firaCode pageInfo">If a CVT is used for primary reduction then CVT ratio is required</h2>
                            </div>
                            <Input name="cvt" label="Max CVT ratio" placeholder="Max CVT ratio"/>
                        </div>
                        <div id="firstRow" className="row background-2 border m-5 justify-content-around first-row">
                            <div className="col-md-12 mb-4 border-bottom border-warning mt-2 p-3 is-white text-left" style={{fontSize:"35px", fontWeight:"600", fontFamily:"Fira Code"}}>
                                <span>Material Data</span>
                            </div>
                            <Input name="hardness" label="Material Hardness" placeholder="Material hardness (Brinell)"/>
                            <Input name="modulus" label="Elastic Modulus" placeholder="Elastic Modulus (MPa)"/>
                            <div className="col-md-12 is-white"><h2 className="text-left m-5 is-firaCode">According to AGMA specification Allowable bending and contact stress depends on manufacturing process. Some of the common gear processes are listed below.</h2>
                            </div>
                            <div className="form-row m-0">
                                <select className="m-4" id="content">
                                    {this.state.processes.map(p => <option style={{fontWeight:"600", fontFamily:"Fira Code"}} key={p.id} value={p.value}>{p.label}</option>)}
                                </select>
                            </div>
                            <div className="form-row m-0 is-white">
                            <div className="col-md-12">Steel Grade</div>
                            <div class="form-check form-check-inline m-4">
                              <input checked class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                              <label class="form-check-label" for="inlineRadio1">1</label>
                            </div>
                            <div class="form-check form-check-inline m-0">
                              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                              <label class="form-check-label" for="inlineRadio2">2</label>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 r">
                        <div id="firstRow" className="row background-2 border m-5 justify-content-around first-row">
                            <div className="col-md-12 border-bottom border-warning mb-4 mt-2 p-3 is-white text-left" style={{fontSize:"35px", fontWeight:"600", fontFamily:"Fira Code"}}>
                                <span>Gear Data</span>
                            </div>
                            <div className="form-row m-0">
                                <div className="form-group ml-2">
                                    <div style={{width:"250px"}}>
                                      <label className="is-white">Preferred Module</label>
                                      <PrettoSlider
                                        valueLabelDisplay="auto"
                                        aria-label="pretto slider"
                                        defaultValue={2}
                                        step={0.25}
                                        min={0.25}max={4.5}

                                      />
                                    </div>
                                </div>
                            </div>
                            <div className="form-row m-0">
                                <div className="form-group ml-2">
                                    <label className="is-white">Preferred Face Width</label>
                                    <input className="form-control" placeholder="Face Width(in mm)"/>
                                </div>
                            </div>
                        </div>
                        <div id="firstRow" className="row background-2 border m-5 justify-content-around first-row">
                            <div className="col-md-12 border-bottom border-warning mb-4 mt-2 p-3 is-white text-left" style={{fontSize:"35px", fontWeight:"600", fontFamily:"Fira Code"}}>
                                <span>Constraints</span>
                            </div>
                                <Input name="Overload" label="Overload Factor" placeholder="Overload Factor"/>
                                <Input name="Quality" label="Quality Number" placeholder="Quality Number(Q)"/>
                            <div className="col-md-12 is-white"><h3 className=" text-left m-5 is-firaCode pageInfo">Value of overload factor will be decided on the basis of shocks, that are coming on Gears, while in motion<br/><br />Quality Number is manufacturer's specs. and can be asked from the manufacturer, or refer the <span><Link to="/docs"><u style={{fontWeight:"400", fontFamily:"Fira Code", color:"#fff"}}>documentation</u></Link></span> if not known</h3>
                            </div>
                                <Input name="Ringd" label="Ring Gear Diameter" placeholder="Ring Gear Diameter (in mm)"/>
                            <div className="col-md-12 is-white"><h3 className=" text-left m-5 is-firaCode pageInfo">If value of overload factor is not provided then default value will be 1.25<br/><br />If value of Ouality Number is not provided then default value will be 11.</h3>
                            </div>
                        </div>
                        <div className="row m-0">
                            <div className=" m-0 col-md-12 d-flex justify-content-center"><button className="btn btn-warning btn-lg rounded"><span style={{fontWeight:"700", fontFamily:"Fira Code"}}>Solve</span></button></div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}