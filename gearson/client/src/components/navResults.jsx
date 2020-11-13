import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
export default class NavResults extends Component {
    
    state = {
        navLinks:[],
    }

    componentDidMount = async() => {
        const {data:navLinks} = await axios.get("/navLinks")
            this.setState({navLinks});
    }
    renderLinks() {
        let alink = this.state.navLinks
        .filter(title => title.title !== "documentation")
        .map(link => 
        <Link to={link.link} style={{textDecoration:"none", fontSize:"20px"}} className="site-navLinks is-white is-operatorMono pr-5 pb-2 is-bold">
            {link.title}
        </Link>)
        return alink;
     }
    
    render() {
        return (
            <div>
                <nav className="navbar sticky-top navbar-expand-md mb-4 pb-2 is-black is-bblack" style={{background:"#111"}}>
          <h1 className="navbar-brand is-monospace is-white navHeading pt-3 is-bold"><span className="is-op is-white p-2">Results</span></h1>
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
            </div>
        )
    }
}
