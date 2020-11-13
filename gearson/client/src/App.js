
import React, { Component } from 'react'; 
import './App.css'; 
import Docs from './components/docs';
import getStarted from './components/getStarted';
import involute from './components/involute';
import contact from './components/contact';
import Shafts from './components/docsShafts';
import GearBox from './components/docsGearBox';
import Materials from './components/docsMaterials';
import HomePage from './components/homePage';
import Queries from './components/queries.jsx';
import Shaft from './components/shaftAnalysis';
import BMDResults from './components/common/BMDResults';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
        <Router>
        <Switch>
        <Route path="/" exact component = {HomePage}/>
        <Route path="/Docs" component = {Docs}/>
        <Route path="/getStarted" component = {getStarted}/>
        <Route path="/involute" component = {involute}/>
        <Route path="/shaft" component = {Shaft}/>
        <Route path="/contact" component = {contact}/>
        <Route path="docs/Shafts" component = {Shafts}/>
        <Route path="docs/GearBox" component = {GearBox}/>
        <Route path="docs/Materials" component = {Materials}/>
        <Route path="/query" component = {Queries} />
        <Route path="/BMDResults" component = {BMDResults}/>   
        </Switch>
        </Router>
        );
    }
}
