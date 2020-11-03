import React, {Component} from "react";
import '../../style/navInvolute.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NavInvolute extends  Component{
    state = {
        navLinks:[],
    }
    changeValue(text) {
        this.setState({dropDownValue: text})
      }
     componentDidMount = async() => {
        const {data:navLinks} = await axios.get("/navLinks")
            this.setState({navLinks});
    }
    renderLinks() {
        let alink = this.state.navLinks
        .filter(title => title.title !== "Draw involute")
        .map(link => 
        <Link to={link.link} style={{textDecoration:"none", fontSize:"20px"}} class="site-navLinks is-white is-operatorMono pr-5 pb-2 mb-2 is-bold">{link.title}</Link>)
        return alink;
     }

    render() {
        const styleLink = document.createElement("link");
        styleLink.rel = "stylesheet";
        styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
        document.head.appendChild(styleLink);
    return (
        <nav className="navbar sticky-top navbar-expand-md pb-2 is-black is-bblack">
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

export default NavInvolute;










        // <span className="css-select">
        //   <select onChange={this.props.onChange} value={this.props.content.value}  className="is-operatorMono">
        //     {this.props.content.map(c =>
        //         <option style={{fontWeight:700}} value={c.value} key={c.id} tag={Link} to="${c.routeLink}">{c.label}</option>
        //         )}
        //   </select>
        // </span>