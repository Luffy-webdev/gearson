import React from 'react';
import '../../style/gearbox/srg.css';
import {gearProcesses, gearMaterials} from '../common/solverOptions';
import { Link } from 'react-router-dom';
import Joi from 'joi-browser';
import Form from '../common/form';
import Slider from '../common/slider';
import { calc } from '../../code/Sr_Gb';
import {
    ComposedChart, AreaChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend, Scatter, Brush
  } from 'recharts';
import axios from 'axios';

export default class Srg extends Form {

    state = {
        data: {
            faceWidth:"",
            overloadFactor:"",
            qualityNumber:"",
            gearboxLength:"",
            rpm:"",
            torque:"",
            power:"",
            cvt:"",
            hardness:"",
            elasticModulus:"",
            slider:"",
            grade:"",
            process:"",
            material:"",
            poissonRatio:"",
        },
        processes:[],
        materials:[],
        errors:{},
        
        
    }
    schema = {
        faceWidth: Joi.number().required().label('Face Width'),
        overloadFactor: Joi.label('Overload Factor'),
        qualityNumber: Joi.label('Quality Number'),
        gearboxLength: Joi.label('Gearbox Length'),
        rpm : Joi.number().label('Motor RPM').required(),
        torque: Joi.number().label('Motor torque').required(),
        power : Joi.number().label('Motor Power').required(),
        cvt : Joi.label('CVT Ratio'),
        hardness : Joi.number().label('Material Hardness').required(),
        poissonRatio: Joi.number().label('Poisson Ratio').required(),
        elasticModulus : Joi.number().label('Elastic Modulus').required(),
        slider:Joi.label('Preferred Module'),
        grade:Joi.label('Material Grade'),
        process:Joi.label('Gear Process'),
        material:Joi.label('Gear Material')

    }
    async componentDidMount() {
        const { data:processes } = await axios.get("/gearprocesses");
        const { data:materials } = await axios.get("/gearmaterials");
        this.setState({processes});
        this.setState({materials});
    }
    
    doSubmit() {
        const { data } = this.state;
        const m = parseFloat(data.slider) || 2;
        const rpm = parseFloat(data.rpm);
        const torque = parseFloat(data.torque);
        const power = parseFloat(data.power);
        const cvt = parseFloat(data.cvt);
        const hardness = parseFloat(data.hardness) || 250; //in Brinell
        const elasticModulus = parseFloat(data.elasticModulus) || 202;
        const faceWidth = parseFloat(data.faceWidth);
        const overloadFactor = parseFloat(data.overloadFactor) || 1.25;
        const qualityNumber = parseFloat(data.qualityNumber) || 11;
        const gearboxLength = parseFloat(data.gearboxLength);
        const poissonRatio = parseFloat(data.poissonRatio) || 0.29;
        const process = parseInt(data.process) || 0; 
        const material = parseInt(data.material) || 0;
        const grade = parseInt(data.grade) || 1;
        const [result, graph1, graph2] = calc(m, faceWidth, gearboxLength, rpm, torque, poissonRatio, elasticModulus, hardness, qualityNumber, overloadFactor, process, material, grade);
        console.log(result);
        console.log(graph1);
        console.log(graph2);
        console.log([process, material, grade]);
        return (
            <React.Fragment>
            <div className="row">
                <div className="col-md-6">
                <ComposedChart width={800} height={500} data={graph1} margin={{top: 20, right: 20, bottom: 20, left: 20,}} syncId="graph">
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="bendingFOS" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="N_pinion" stroke="#ff7300" />
                    <Line type="monotone" dataKey="N_gear" stroke="#ffc600" />
                    <Brush/>
                    {/* <Scatter dataKey="cnt" fill="red" /> */}
                </ComposedChart>
                </div>
                <div className="col-md-6">
                <ComposedChart width={800} height={500} data={graph2} margin={{top: 20, right: 20, bottom: 20, left: 20,}} syncId="graph">
                    <CartesianGrid stroke="#f5f5f5"/>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="contactFOS" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="N_pinion" stroke="#ff7300" />
                    <Line type="monotone" dataKey="N_gear" stroke="#ffc600" /> 
                    {/* <Scatter dataKey="cnt" fill="red" /> */}
                </ComposedChart>
                </div>
            </div>  
      <AreaChart width={1800} height={700} data={graph2} margin={{top: 20, right: 20, bottom: 20, left: 20,}} syncId="graph">
        <CartesianGrid stroke="#f5f5f5" syncId="graph"/>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="length" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>    
      <div className="row m-0 p-3 justify-content-center">
        <button onClick={() => this.getResult(false)} className="btn btn-danger btn-md btn-block">Hide Results</button>
      </div>      
          
            <table style={{background:"#1a1a1d"}} className="table m-0 table-hover table-borderless table-dark">
                <thead class="thead" style={{position:"sticky", top:"0"}}>
                    <tr className="is-fira" style={{fontSize:"16px"}}>
                        <th>module</th>
                        <th>Face Width</th>
                        <th>No. of teeth in pinion</th>
                        <th>No. of teeth in gear</th>
                        <th>Gear Reduction</th>
                        <th>Bending Factor of Safety</th>
                        <th>Contact Factor of Safety</th>
                        <th>Length</th>
                        <th>Quality Number</th>
                        <th>Overload Factor</th>
                    </tr>
                </thead>
                <tbody>
                    <button className="btn btn-danger btn-sm" style={{position:"fixed"}}>Hide</button>
                    {result.map( c =>
                        <tr className="is-fira" style={{fontSize:"15px"}}>
                            <td>{c.module}</td>
                            <td>{c.faceWidth}</td>
                            <td>{c.n_pinion}</td>
                            <td>{c.n_gear}</td>
                            <td>{c.reduction}</td>
                            <td>{c.bending_fos}</td>
                            <td>{c.contact_fos}</td>
                            <td>{c.length}</td>
                            <td>{c.qualityN}</td>
                            <td>{c.overload}</td>
                        </tr>
                    )}
                </tbody>
            </table>  
            
          </React.Fragment>
        )
    }

    render() {
        const { processes, materials } = this.state;
        return (
            <React.Fragment>
              <form onSubmit={this.handleSubmit}>

                <div className="row m-0">

                    <div className="col-md-6 l">
                        <div id="firstRow" className="row background-2 border m-5 justify-content-around first-row">
                            <div className="col-md-12 border-bottom border-warning mb-4 mt-2 p-3 is-white text-left">
                                <h2 className="form-headings">Loading</h2>
                            </div>
                            {this.renderInput('rpm', 'Motor/Engine RPM')}
                            {this.renderInput('torque', 'Motor/Engine torque')}
                            {this.renderInput('power', 'Motor/Engine power')}
                            <div className="col-md-12 is-white"><h2 className=" text-left m-5 is-fira pageInfo">If a CVT is used for primary reduction then CVT ratio is required</h2></div>
                            {this.renderInput('cvt','Max CVT Ratio')}</div>
                            <div id="firstRow" className="row background-2 border m-5 justify-content-around first-row">
                            <div className="col-md-12 mb-4 border-bottom border-warning mt-2 p-3 is-white text-left">
                                <h2 className="form-headings">Material Data</h2>
                            </div>
                            {this.renderInput('hardness', 'Material Hardness')}
                            {this.renderInput('poissonRatio', 'Poisson Ratio')}
                            {this.renderInput('elasticModulus', 'Elastic Modulus')}
                            <div className="col-md-12 is-white">
                                <h5 className="text-left m-5 is-fira">
                                    According to AGMA specification Allowable bending and contact stress depends on manufacturing process. 
                                    Some of the common gear processes are listed below.
                                </h5>
                            </div>
                            <div className="form-row m-0 justify-content-center">
                                <select className="m-4" id="process" name="process" onChange={this.handleProcess}>
                                    {processes.map(p => <option style={{fontWeight:"600", fontFamily:"Fira Code"}} key={p._id} value={p.value}>{p.label}</option>)}
                                </select>
                            </div>
                            <div className="form-row m-0 justify-content-center">
                                <select className="m-4" id="material" name="material" onChange={this.handleMaterial}>
                                    {materials.map(p => <option style={{fontWeight:"600", fontFamily:"Fira Code"}} key={p._id} value={p.value}>{p.label}</option>)}
                                </select>
                            </div>
                            
                            <div className="form-row m-0 is-white">
                            <div className="col-md-12"><h3 className="is-firaCode">Steel Grade</h3></div>
                            {this.renderRadio('grade','1', this.handleRadio, '1')}
                            {this.renderRadio('grade','2', this.handleRadio, '2')}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 r">
                        <div id="firstRow" className="row background-2 border m-5 justify-content-around first-row">
                            <div className="col-md-12 border-bottom border-warning mb-4 mt-2 p-3 is-white text-left">
                                <h2 className="form-headings">Gear Data</h2>
                            </div>
                            <div className="form-row m-0" style={{width:"300px"}}>
                                <Slider name="slider" label="Preferred Module" value={this.state.data.slider} step="0.25" valueName="module" width="250px" min="0.25" max="4.5" onChange={this.handleSlide}/>
                            </div>
                                {this.renderInput('faceWidth','Preferred Face Width')}
                        </div>
                        <div id="firstRow" className="row background-2 border m-5 justify-content-around first-row">
                            <div className="col-md-12 border-bottom border-warning mb-4 mt-2 p-3 is-white text-left">
                                <h2 className="form-headings">Constraints</h2>
                            </div>
                                {this.renderInput('overloadFactor','Overload Factor')}
                                {this.renderInput('qualityNumber','quality Number')}
                            <div className="col-md-12 is-white">
                                <h5 className=" text-left m-5 is-fira pageInfo">
                                    Value of overload factor will be decided on the basis of shocks, that are coming on Gears, while in motion<br/><br />Quality Number is manufacturer's specs. and can be asked from the manufacturer, or refer the
                                    <span>&nbsp;<Link to="/docs"><u style={{fontWeight:"400", fontFamily:"Fira Code", color:"#fff"}}>documentation</u></Link></span> if not known
                                </h5>
                            </div>
                                {this.renderInput('gearboxLength','Max Length of Gearbox')}
                            <div className="col-md-12 is-white">
                                <h5 className=" text-left m-5 is-fira pageInfo">
                                    If value of overload factor is not provided then default value will be 1.25<br/><br />
                                    If value of Ouality Number is not provided then default value will be 11.
                                </h5>
                            </div>
                        </div>
                        <div className="row m-0 mb-5">
                            <div className=" m-0 col-md-12 d-flex justify-content-center">
                                {this.renderButton("Analyse")}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
                {this.state.showResult && this.doSubmit()}
            </React.Fragment>
        );
    }
}


            // <div className="jumbotron jumbotron-fluid m-0 bg-dark is-white">
            //     <Link to='/'><h1 className="text-center is-firaCode">If you have your gear configuration and want it to be tested</h1></Link>
            // </div>




