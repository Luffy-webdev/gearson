import React, {Component} from "react";
import '../style/docs.css';
import '../style/Nav.css';
import { Link } from 'react-router-dom';
import { getNavLinksContact } from './common/docsOptions';
export default class NavContact extends  Component{

    renderLinks() {
        let alink = this.props.navLinks.map(link => <Link to={`${link.href}`} style={{textDecoration:"none", fontSize:"20px"}} class="site-navLinks is-white is-operatorMono pr-5 pb-2 is-bold">{link.label}</Link>)
        return alink;
     }

    render() {
        const styleLink = document.createElement("link");
        styleLink.rel = "stylesheet";
        styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
        document.head.appendChild(styleLink);
    return (
        <nav className="navbar sticky-top navbar-expand-md pb-2 is-black is-bblack" style={{background:"#181818"}}>
          <h1 className="navbar-brand is-monospace is-white is-bold navHeading pt-3"><span className="is-operatorMono" style={{background:"#ffc600", color:"#000"}}>Gears&#x2019;On!</span></h1>

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











        // <span className="css-select">
        //   <select onChange={this.props.onChange} value={this.props.content.value}  className="is-operatorMono">
        //     {this.props.content.map(c =>
        //         <option style={{fontWeight:700}} value={c.value} key={c.id} tag={Link} to="${c.routeLink}">{c.label}</option>
        //         )}
        //   </select>
        // </span>