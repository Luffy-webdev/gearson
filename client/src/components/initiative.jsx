import React, { Component } from 'react';
import '../style/i.css';
export default class Initiative extends Component {

    render() {
        const style = {
            backgroundColor: "#111",
            fontFamily:"Fira Code"
        }
        return (
            <div className="jumbotron jumbotron-fluid m-0 pt-3 pb-3" style={style}>
                <h1 className="p-1 is-white text-center">Black Lives Matter.
                    <a href="https://support.eji.org/give/153413/#!/donation/checkout" style={{color:"FFAF46"}}>
                    <u style={{color:"FFAF46"}}>Support the Equal Justice Initiative.</u>
                    </a>
                </h1>
            </div>
        );
    }
}
