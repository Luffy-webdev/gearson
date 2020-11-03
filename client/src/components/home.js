import React, {Component} from "react";
import '../App.css';
import axios from 'axios';
import Documentation from '../assets/Documentation.svg';
import getStarted from '../assets/getStarted.svg';
import involute from '../assets/involute.svg';
import { Link } from 'react-router-dom';
export default class home extends Component{

        
        
        render(){
    return (
        <div className="back-is-black m-0 p-0 mt-0">
        <div class="container back-is-black">
        <div class="row">
        <div class="col-md-12 p-0">
        <header>
        <h1 class="is-audiowide format-head"><span class="color">Gears</span><span class="text-light" style={{fontFamily:"Space Mono"}}>&#x2019;</span>
        <span class="text-light">On!</span>
        </h1>
        </header>
        </div>
        </div>
        <div class="row justify-content-around page-contents align-items-center">

        <div class="col-sm-4 pt-5 mt-3">
        <Link to='/docs'><img src={Documentation} alt="" class="mx-auto d-block img-fluid img-of-doc"/></Link>
        <Link to='/docs'><h4 class="text-light is-operatorMono text-center pt-3 is-bold" style={{ textDecoration: 'none' }}>Documentation</h4></Link>
        </div>

        <div class="col-sm-4 pt-5">
        <Link to='/getStarted'><img src = {getStarted} alt = "" class="mx-auto d-block img-fluid img-of-gear" /></Link>
        <Link to='/getStarted'><h4 class="text-light is-operatorMono text-center pt-3 is-bold" style={{ textDecoration: 'none' }}>Get Started</h4></Link>
        </div>

        <div class="col-sm-4 pt-5">
        <Link to='/involute'><img src={involute} alt="" class="mx-auto d-block img-fluid img-of-inv"/></Link>
        <Link to='/involute'><h4 class="text-light is-operatorMono text-center pt-3 is-bold" style={{ textDecoration: 'none' }}>Draw your own <br/>involute curve</h4></Link>
        </div>

        </div>
        <div class="format-body pt-0">
        <h3 class="text-center text-light is-operatorMono mt-5 pt-4 is-bold">
        Start with scratch! Design your own gearbox with our embedded configuration <span class="color">solver</span>.
        </h3>
        </div>
        <footer class="footer pt-5">
        <div class="row">
        <div class="col-md-12 mt-5 text-light is-op text-center"><Link to='/contact' style={{ textDecoration: 'none', color: '#888', transition: '0.2' }}>Contact</Link></div>
        </div>
        </footer>
        </div>
        </div>
        );
    }
}
