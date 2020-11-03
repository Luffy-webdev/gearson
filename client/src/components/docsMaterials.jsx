import React, { Component } from 'react';
import axios from 'axios';
import '../style/docsMaterials.css';

export default class Materials extends Component {
    state = {
        materials:[]
    }
    async componentDidMount() {
        const {data:materials} = await axios("/docsMaterials");
        this.setState({materials});
    }
    
    render() {
        const {materials} = this.state;
        return (
            <div className="container-fluid m-0 p-3 is-black is-white is-op">
                <table className="table is-white is-op table-borderless table-striped ">
                    <thead className=" bg-success">
                        <tr className="is-white">
                            <th>Material</th>
                            <th>JIS Material No.</th>
                            <th>Tensile Strength N/mm2</th>
                            <th>Elongation (%)</th>
                            <th>Drawability (%)</th>
                            <th>Hardness HB</th>
                            <th>Characteristics</th>
                        </tr>
                    </thead>
                    <tbody className="is-white">
                        {materials.map(m => 
                            <tr>
                        <td>{m.Material}</td>
                                <td>{m.MaterialNo}</td>
                                <td>{m.TS}</td>
                                <td>{m.E}</td>
                                <td>{m.D}</td>
                                <td>{m.hardness}</td>
                                <td>{m.Characteristics}</td>   
                            </tr>
                        )}
                        
                    </tbody>
                </table> 
            </div>
        );
    }
}


