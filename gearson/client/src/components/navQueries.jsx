import React, {Component} from "react";
import '../style/docs.css';
import '../style/Nav.css';
import { Link } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';

export default class NavQueries extends  Component{
    state = {
        navLinks:[],
    }
     componentDidMount = async() => {
        const {data:dropLinks} = await axios.get("/dropLinks")
        const {data:navLinks} = await axios.get("/navLinks")
            this.setState({dropLinks});
            this.setState({navLinks});
            console.log(this.state.dropLinks)
    }
    renderLinks() {
        let alink = this.state.navLinks
        .filter(title => title.title !== "query")
        .map(link => 
        <Link to={link.link} style={{textDecoration:"none", fontSize:"20px"}} className="site-navLinks is-white is-operatorMono pr-5 pb-2 is-bold">
            {link.title}
        </Link>)
        return alink;
     }

    render() {
    return (
        <nav className="navbar sticky-top navbar-expand-md pb-2 is-black is-bblack" style={{background:"#111"}}>
          <h1 className="navbar-brand is-monospace is-white is-bold navHeading pt-3">
              <span className="is-operatorMono is-white">
                  General Queries
                </span>
            </h1>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
        </button>
          <div className="collapse navbar-collapse align-items-start justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                {this.renderLinks()}
            </div>
          </div>
        </nav>
    );
}
}

