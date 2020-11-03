import React, {Component} from "react";
import DocsGear from './docsGear';
import '../style/docs.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import {getContents, getLinks, docsheading} from './common/docsOptions';
import Nav1 from './Nav1';
import Shafts from './docsShafts';
import GearBox from './docsGearBox';
import Materials from './docsMaterials';
import NF from './notFound';
import axios from "axios";
export default class Docs extends Component{

    state = {
        dropContent : getContents(),
        navLinks: getLinks(),
        heading: docsheading()
    }
    
    handleChange = e => {
        this.setState({value:e.target.value});
    }



    render(){
        const { value, routeLink, text, dropContent, navLinks, heading } = this.state;
    return (
        <div>
            <Nav1 navHeading={heading}  navLinks={navLinks} content={dropContent} onChange={this.handleChange}/>
        <Router>
            <Switch>
                <Route exact path="/docs" component={DocsGear}/>
                <Route  path="/docs/Shafts" component={Shafts}/>
                <Route  path="/docs/GearBox" component={GearBox} />
                <Route  path="/docs/Materials" component={Materials}/>
                <Route component={NF} />
            </Switch>
        </Router>
        </div>
    );
}
}



// import React, { PureComponent, Fragment } from 'react';
// import ReactDOM from 'react-dom';
// import {getContents} from './contents';
// class Select extends PureComponent {
//   state = {
//     options: getContents(),
//   };

//   handleChange = (event) => {
//     this.setState({ value: event.target.value });
//   };

//   render() {
//     const { options, value } = this.state;

//     return (
//       <Fragment className="container">
//         <select onChange={this.handleChange} value={value}>
//           {options.map(c => (
//             <option key={c.id} value={c.value}>
//               {c.label}
//             </option>
//           ))}
//         </select>
//         <h1>Favorite page: {value}</h1>
//       </Fragment>
//     );
//   }
// }

// ReactDOM.render(<Select />, window.document.body);