import React, {Component} from "react";
import '../style/getStarted.css'
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav1 from './Nav1';
import NavSolver from './navSolver';
import {Gearbox, getLinksSolver, solverHeadings, getnavHeadingSOlver} from './common/docsOptions';
import Ceg from './gearbox/ceg';
import Drg from './gearbox/drg';
import Eg from './gearbox/eg';
import Heg from './gearbox/heg';
import Srg from './gearbox/srg';
import NF from './notFound';
export default class getStarted extends Component {
    state = {
        gearboxtype : Gearbox(),
        navLinks: getLinksSolver(),
        headings: solverHeadings(),
        navHeadingSolver : getnavHeadingSOlver(),
        value:"This is an instant documentation to ease-off your work"
    }
    handleChange = e => {
        this.setState({value:e.target.value});
    }

    render() {
        const {value, routeLink, gearboxtype, navLinks, navHeadingSolver} = this.state;
    return (
        <React.Fragment>
        <NavSolver/>
        <Router>
            <Switch>
                <Route exact path="/getStarted" component={Srg} />
                <Route path="/getStarted/drg" component={Drg} />
                <Route path="/getStarted/eg" component={Eg} />
                <Route path="/getStarted/ceg" component={Ceg} />
                <Route path="/getStarted/heg" component={Heg} />
                <Route component={NF}/>
            </Switch>
        </Router>
        </React.Fragment>
    );
}
}




  //       <div class="back-is-black">
  // <div class="container-fluid">
  //   <div class="row">
  //     <div class="col-lg-2">
  //         <Link to='/'><h6 class="color pt-3 home" style={{fontSize: "16px"}}>Home</h6></Link>
  //     </div>
  //     <div class="col-lg-8 color-back">
  //       <div class="container-md">
  //         <div class="form-inline mt-4 rounded justify-content-around">
  //           <div class="row color rounded-top mt-2 pt-2 justify-content-start" style={{width: "100%"}}>
  //             <div class="col-md-10 text-monospace mb-4">Solver is based on AGMA standards. For more information visit the <a href="https://wp.kntu.ac.ir/asgari/AGMA%202001-D04.pdf">2001-D04</a> edition</div>
  //           </div>
  //           <div class="row color rounded-top mt-3 pt-2 justify-content-start" style={{width: "100%"}}>
  //             <div class="col-md-5 text-monospace" style={{color:"#000"}}><mark style={{background:"#ffc600", fontWeight:"700"}}>Single Reduction GearBox</mark></div>
  //           </div>
  //           <div class="row color rounded-top mt-2 pt-2 justify-content-start" style={{width: "100%"}}>
  //             <div class="col-md-2">
  //               <div class="dropdown adjust-to-media-btn pb-4 pt-4 pb-3 ml-0 mr-3">
  //                 <button class="btn btn-secondary btn-sm dropdown-toggle fo " style={{background: "#c4c4c4", color: "#000"}} type="button" id="G-type" data-toggle="dropdown">
  //                   Gearbox
  //                 </button>
  //                 <div class="dropdown-menu">

  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div class="row" style={{width: "100%"}}>
  //             <div class="col-md-2 d-flex justify-content-center align-items-center">
  //               <h4 class="color input-heading fo-2">Load</h4>
  //             </div>
  //             <div class="col-md-10">
  //             </div>
  //           </div>
  //           <div class="row color color1 rounded pt-2 mt-4 justify-content-center" style={{width: "100%"}}>
  //             <div class="col-md-4 mb-3 pt-4 pb-3">
  //               <div class="form-group form-group-1 justify-content-center">
  //                 <label class="color label fo" for="rpm">Motor/Engine RPM</label>
  //                 <input class="form-control input1" type="number" id="rpm" name="rpm" placeholder="max motor RPM" />
  //               </div>
  //             </div>
  //             <div class="col-md-4 mb-3 pt-4 pb-3 mt-0">
  //               <div class="form-group form-group-1 justify-content-center">
  //                 <label class="color label fo" for="torque">Motor/Engine torque</label>
  //                 <input class="form-control input1" type="number" id="torque" name="torque" placeholder="max motor RPM" />
  //               </div>
  //             </div>
  //             <div class="col-md-4 mb-3 pt-4 pb-3 mt-0">
  //               <div class="form-group form-group-1 justify-content-center">
  //                 <label class="color label fo" for="power">Motor/Engine power</label>
  //                 <input class="form-control input1" type="number" id="power" name="power" placeholder="max motor RPM" />
  //               </div>
  //             </div>
  //           </div>
  //           <div class="row color color1 rounded-bottom pt-2 justify-content-center align-items-center mb-5" style={{width: "100%"}}>
  //             <div class="col-md-8"><h2>If a CVT is connected to engine then max ratio is needed</h2></div>
  //             <div class="col-md-4 mb-3 pt-1 pb-3">
  //               <div class="form-group form-group-1 justify-content-center">
  //                 <label class="color label fo" for="rpm">CVT ratio</label>
  //                 <input class="form-control input1" type="number" id="rpm" name="rpm" placeholder="CVT ratio" />
  //               </div>
  //             </div>
  //           </div>
  //         <div class="row" style={{width: "100%"}}>
  //           <div class="col-md-3 d-flex justify-content-center">
  //             <h4 class="color input-heading fo-2">Gear Data</h4>
  //           </div>
  //           <div class="col-md-9">
  //           </div>
  //         </div>

  //         <div class="row color color1 rounded justify-content-center pt-5 mt-4 mb-5" style={{width: "100%"}}>
  //           <div class="col-md-6 mb-5">
  //             <div class="form-group form-group-1 justify-content-center">
  //               <label class="color label fo" for="N-sun">preferred module (in mm)</label>
  //               <input class="form-control input1" type="text" id="N-sun" name="N-sun" placeholder="module (in mm)" />
  //             </div>
  //           </div>
  //           <div class="col-md-6 mb-5" style={{marginTop:"0"}}>
  //             <div class="form-group form-group-1 justify-content-center">
  //               <label class="color label fo" for="module-p">Preferred face Width(in mm)</label>
  //               <input class="form-control input1" type="text" id="module-p" name="module-p" placeholder="face width (in mm)" />
  //             </div>
  //           </div>
  //         </div>
  //        <div class="row" style={{width: "100%"}}>
  //           <div class="col-md-3 d-flex justify-content-center">
  //             <h4 class="color input-heading fo-2">Material Data</h4>
  //           </div>
  //           <div class="col-md-9">
  //           </div>
  //         </div>
  //           <div class="row color color1 rounded-top mt-4 pt-4 justify-content-center" style={{width:"100%"}}>
  //             <div class="col-md-6 mb-4 pt-3 pb-3">
  //               <div class="form-group form-group-1 justify-content-center">
  //                 <label class="color label fo justify-content-start" for="hardness">Hardness</label>
  //                 <input class="form-control input1" type="number" id="hardness" name="hardness" placeholder="Hardness in Brinell" />
  //               </div>
  //             </div>
  //             <div className="col-md-6"></div>
  //           </div>
  //           <div class="row color color1 justify-content-center" style={{width:"100%"}}>
  //             <div class="col-md-6 mb-4 pt-3 pb-3">
  //               <div class="form-group form-group-1 justify-content-center">
  //                 <label class="color label fo justify-content-start" for="hardness">Elasticity Modulus (in GPa)</label>
  //                 <input class="form-control input1" type="number" id="hardness" name="hardness" placeholder="Elasticity Modulus(in GPa)" />
  //               </div>
  //             </div>
  //             <div className="col-md-6"></div>
  //           </div>
  //           <div class="row color color1" style={{width:"100%"}}>
  //             <div class="col-md-12">
  //               <h5 class="color mr-3 mb-4 pt-2 ml-2 fo fo-1 text-monospace">According to AGMA specification Allowable bending and contact stress depends on manufacturing process. Some of the common gear processes are listed below.</h5>
  //             </div>
  //           </div>
  //           <div class="row color color1 rounded-bottom justify-content-center pt-2 mb-5" style={{width:"100%"}}>
  //             <div class="col-md-6 d-flex align-items-center">
  //               <div class="dropdown  mr-2 pb-2 mt-2 ml-0 pl-2 adujust-to-media">
  //                 <button class="btn btn-secondary btn-sm dropdown-toggle mr-1 ml-0 fo fo-1" style={{background: "#c4c4c4", color: "#000"}} type="button" id="process" data-toggle="dropdown">
  //                   process performed on gear
  //                 </button>
  //                 <div class="dropdown-menu">
  //                 </div>
  //               </div>
  //             </div>
  //             <div class="col-md-6">
  //               <div class="form-group justify-content-start pt-1 mt-4 flex-nowrap">
  //                 <h5 class="color mr-5 mb-4 fo fo-1">Steel Grade</h5>
  //                 <div class="form-check form-check-inline mb-4 mt-1">
  //                   <input class="form-check-input" type="radio" name="Grade" id="Grade-1" value="option1" />
  //                   <label class="form-check-label fo-1" for="Grade-1">1</label>
  //                 </div>
  //                 <div class="form-check form-check-inline mb-4 mt-1">
  //                   <input class="form-check-input" type="radio" name="Grade" id="Grade-2" value="option2" />
  //                   <label class="form-check-label fo-1" for="Grade-2">2</label>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div class="row" style={{width:"100%"}}>
  //             <div class="col-lg-3 d-flex justify-content-center">
  //               <h4 class="color input-heading fo-2">Constraints</h4>
  //             </div>
  //             <div class="col-md-9">
  //             </div>
  //           </div>
  //           <div class="row color color1 rounded-top mt-4 pt-4 justify-content-center" style={{width:"100%"}}>
  //             <div class="col-md-6 mb-4 pt-3">
  //               <div class="form-group form-group-1 justify-content-center">
  //                 <label class="color label fo justify-content-start" for="length-max">Max length of GearBox (L_max)</label>
  //                 <input class="form-control input1" type="number" id="length-max" name="lenght-max" placeholder="max length (in mm)" />
  //               </div>
  //             </div>
  //             <div class="col-md-6"></div>
  //           </div>
  //           <div class="row color color1 rounded-top  pt-4 justify-content-center" style={{width:"100%"}}>
  //             <div class="col-md-6 mb-4">
  //               <div class="form-group form-group-1 justify-content-center">
  //                 <label class="color label fo justify-content-start" for="Ko">Overload Factor (Ko)</label>
  //                 <input class="form-control input1" type="number" id="Ko" name="Ko" placeholder="Overload factor" />
  //               </div>
  //             </div>
  //             <div class="col-md-6"></div>
  //           </div>
  //           <div class="row color color1 rounded-top rounded-bottom pt-4 justify-content-center" style={{width:"100%"}}>
  //             <div class="col-md-6 mb-4">
  //               <div class="form-group form-group-1 justify-content-center">
  //                 <label class="color label fo justify-content-start" for="Q">Quality Number (Q)</label>
  //                 <input class="form-control input1" type="number" id="Q" name="Q" placeholder="Qualtiy Number" />
  //               </div>
  //             </div>
  //             <div class="col-md-6"></div>
  //           </div>
  //           <div class="row color color1" style={{width: "100%"}}>
  //             <div class="col-md-12">
  //               <h5 class="color mr-3 mt-2 ml- mb-4 fo fo-1" style={{fontSize: "12px"}}>If no value is provided then, default value of Ko will be 1.25 and for Q will be 11.<br /><br />
  //                 Max length of GearBox is considered as center to center distance, not total length.<br /><br />For more information about above mentioned factors and materials refer <Link to='/docs'>documentation</Link>. </h5>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  // </div>