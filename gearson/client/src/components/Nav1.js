import React, {Component} from "react";
import '../style/docs.css';
import '../style/Nav.css';
import { Link } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';

class Nav1 extends  Component{
    state = {
        dropLinks : [],
        navLinks:[],
        dropDownValue: "topic"
    }
    changeValue(text) {
        this.setState({dropDownValue: text})
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
        .filter(title => title.title !== "documentation")
        .map(link => 
        <Link to={link.link} style={{textDecoration:"none", fontSize:"20px"}} className="site-navLinks is-white is-operatorMono pr-5 pb-2 is-bold">
            {link.title}
        </Link>)
        return alink;
     }
     
    render() {
    return (
        <nav className="navbar sticky-top navbar-expand-md pb-2 is-black is-bblack" style={{background:"#111"}}>
          <h1 className="navbar-brand is-monospace is-white navHeading pt-3 is-bold"><span className="is-operatorMono p-2" style={{background:"#ffaf46", color:"#000"}}>{this.props.navHeading.label}</span></h1>
          <DropdownButton id="dropdown-Nav" size="md" className=" mb-3 is-op rounded" title={this.state.dropDownValue} > 
                {this.state.dropLinks.map(data => 
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

export default Nav1;










        // <span className="css-select">
        //   <select onChange={this.props.onChange} value={this.props.content.value}  className="is-operatorMono">
        //     {this.props.content.map(c =>
        //         <option style={{fontWeight:700}} value={c.value} key={c.id} tag={Link} to="${c.routeLink}">{c.label}</option>
        //         )}
        //   </select>
        // </span>