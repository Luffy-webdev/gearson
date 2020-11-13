// import React, { useState, useEffect } from 'react'
// import queryString from 'query-string';
// import { SBD }from '../../code/shaft';
// import {
//     ComposedChart, AreaChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
//     Legend, Scatter, Brush
//   } from 'recharts';




// const Result = ({ location }) => {

//     const [Length, setLength] = useState('')
//     const [Ft1, setFt1] = useState('')
//     const [Ft2, setFt2] = useState('')
//     const [Fr1, setFr1] = useState('')
//     const [Fr2, setFr2] = useState('')
//     const [Ray, setRay] = useState('')
//     const [Raz, setRaz] = useState('')
//     const [Rby, setRby] = useState('')
//     const [Rbz, setRbz] = useState('')
//     const [dg1a, setdg1a] = useState('')
//     const [dg2b, setdg2b] = useState('')
//     useEffect(() => {
//         const {length, dg1a, dg2b, Ft1, Ft2, Fr1, Fr2, Ray, Raz, Rby, Rbz} = queryString.parse(location.search);
//         setLength(length);
//         setdg1a(dg1a);
//         setdg1a(dg2b);
//         setFt1(Ft1);
//         setFt2(Ft2);
//         setFr1(Fr1);
//         setFr2(Fr2);
//         setRay(Ray);
//         setRaz(Raz);
//         setRby(Rby);
//         setRbz(Rbz);
//     })
    
//         return (
//         <h1>{Ft1}</h1>
//         )
// }

// export default Result;


import React, { Component } from 'react'
import queryString from 'query-string';
import { SBD }from '../../code/shaft';
import NavResults from '../navResults';
import {
    ComposedChart, AreaChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend, Scatter, Brush
  } from 'recharts';

export default class BMDResults extends Component {
    
    result() {
        const {Ft1, Ft2, Fr1, Fr2, Ray, Raz, Rby, Rbz, length, dg1a, dg2b, outer_D, inner_D} =  queryString.parse(this.props.location.search);
        console.log(outer_D, inner_D, Ray);
        const [result_xz, result_yz, resultBending_xz, resultBending_yz, max_sf_xz, max_sf_yz, max_bm_xz, max_bm_yz] = SBD(Ft1, Ft2, Fr1, Fr2, Ray, Raz, Rby, Rbz, length, dg1a, dg2b);
        return (
            <div className="is-black m-0">
                <div className="row m-0">
                    <div className="col-md-6">
                        <ComposedChart width={800} height={500} data={result_xz} margin={{top: 20, right: 20, bottom: 20, left: 20,}} syncId="graph">
                            <CartesianGrid strokeDasharray="5 5" stroke="#333" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line strokeWidth={4} dot={false} type="monotone" dataKey="shear_force_xz" stroke="#ffc600" />
                        </ComposedChart>
                        <h5 className="is-white is-fira ml-5">
                           Max Shear force in xz-plane = {max_sf_xz} N
                        </h5>
                    </div>
                    <div className="col-md-6 m-0">
                        <ComposedChart width={800} height={500} data={result_yz} margin={{top: 20, right: 20, bottom: 20, left: 20,}} syncId="graph">
                            <CartesianGrid strokeDasharray="5 5" stroke="#333" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line strokeWidth={4} dot={false} type="monotone" dataKey="shear_force_yz" stroke="#ffc600" />
                        </ComposedChart>
                        <h5 className="is-white is-fira ml-5">
                           Max Shear force in yz-plane = {max_sf_yz} N
                        </h5>
                    </div>
                </div>
                <div className="row m-0">
                    <div className="col-md-6">
                        <ComposedChart width={800} height={500} data={resultBending_xz} margin={{top: 20, right: 20, bottom: 20, left: 20,}} syncId="graph1">
                            <CartesianGrid strokeDasharray="5 5" stroke="#333" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line strokeWidth={4} dot={false} type="monotone" dataKey="bending_moment_xz" stroke="#ffc600" />
                        </ComposedChart>
                        <h5 className="is-white is-fira ml-5 mb-3">
                           Max Bending Moment in xz-plane = {max_bm_xz} N-m
                        </h5>
                    </div>
                    <div className="col-md-6 m-0">
                        <ComposedChart width={800} height={500} data={resultBending_yz} margin={{top: 20, right: 20, bottom: 20, left: 20,}} syncId="graph1">
                            <CartesianGrid strokeDasharray="5 5" stroke="#333" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line strokeWidth={4} dot={false} type="monotone" dataKey="bending_moment_yz" stroke="#ffc600" />
                        </ComposedChart>
                        <h5 className="is-white is-fira ml-5 mb-3">
                           Max Bending Moment in yz-plane = {max_bm_yz} N-m
                        </h5>
                    </div>
                </div>   
                   <div className="is-white is-fira">
                        Outer Diameter = {outer_D}<br/>
                        Inner Diameter = {inner_D}
                   </div>
            </div>
        );
    }
    render() {
        
        return (
            <div className="is-black vh-100">
            <NavResults />
            <div className="m-0">
                {this.result()}        
            </div>
            </div>
        )
    }
}
