import React, {Component} from "react";
import '../style/docs.css';
import '../style/Nav.css';
import { Link } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';

export default class NavSolver extends Component{
    state = {
        solverLinks : [],
        navLinks:[],
        dropDownValue: "GearBox"
    }
    changeValue(text) {
        this.setState({dropDownValue: text})
      }
     componentDidMount = async() => {
        const {data:solverLinks} = await axios.get("/solverLinks")
        const {data:navLinks} = await axios.get("/navLinks")
            this.setState({navLinks});
            this.setState({solverLinks});
    }
    renderLinks() {
        let alink = this.state.navLinks
        .filter(title => title.title !== "get started")
        .map(link => 
        <Link to={link.link} style={{textDecoration:"none", fontSize:"20px"}} class="site-navLinks is-white is-operatorMono pr-5 pb-2 is-bold">
            {link.title}
        </Link>)
        return alink;
     }

     handleDropdownText(text){
        this.setState({dropDownValue: text})
     }
    render() {
    return (
        <nav className="navbar sticky-top navbar-expand-md pb-2 is-black is-bblack" style={{background:"#111"}}>
          <h1 className="navbar-brand is-monospace is-white is-bold navHeading pt-3 solver-navHeading"><span className="is-operatorMono p-2" style={{background:"#ffaf46", color:"#000"}}>Solver</span></h1>
            <DropdownButton ClassName="border-radius rounded" id="dropdown-Nav" size="md" variant="danger" className="mb-3 is-op rounded" title={this.state.dropDownValue} > 
                    {this.state.solverLinks.map(data => 
                        <Link to={data.link}><Dropdown.Item className="rounded" as="button">
                            <div className="rounded" onClick={(e) => this.changeValue(e.target.textContent)} key={data._id}>
                                {data.title}
                            </div>
                        </Dropdown.Item></Link>
                        )}
                </DropdownButton>
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






                            