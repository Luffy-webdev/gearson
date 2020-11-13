import React, { Component } from 'react'
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js';
import 'draft-js/dist/Draft.css';
import NavQueries from './navQueries';
import '../style/queries.css'
import axios from 'axios';

export default class Queries extends Component {
    state = {
        query:'',
        reply:'',
        queries:[],
        showTA:false,
    }
     componentDidMount = () => {
        this.getQueries();

    }
    handleChange = ({ target }) => {
        const value = target.value;
        this.setState({query:value});
    }
    onChange = (editorState) => {
        this.setState({editorState});
    }
    getQueries(){
        axios.get("/queries")
        .then(response => {
            const data = response.data;
            this.setState({queries:data});
            console.log(this.state.queries);
        }).catch(() => console.log("error"))
    }
    displayQueries = (queries) => {
        if(!queries.length) return null;
        return queries.map(q => 
                <div style={{backgroundColor:"#d8953d"}} className="jumbotron p-2 mb-4 mt-2 rounded  is-op">
                    <h4>{q.query}</h4>    
            </div>
            )
    }

    handleSubmit = e => {
        e.preventDefault();
        const payload = {
            query:this.state.query
        }
        axios({
            url:'/queries',
            method:'POST',
            data: payload
        })
        .then(() => {
            this.resetUserInputs();
            this.getQueries();
        })
        .catch(() => console.log("data failed to upload"));
        
    }
    resetUserInputs = () => {
        this.setState({
            query:''
        });
    };
    validateQuery(query) {
        if(!query.length) return true
        return false;
    }
    render() {
        console.log(this.state.query)
        return (
            <div>
                <NavQueries />
                <div className="row m-0 vh-100">
                    <div className="col-md-5 l p-4">
                        <form onSubmit={this.handleSubmit}>
                                <div classname="form-group">
                                    <label htmlFor="query" className=" is-white is-op">Don't think much just post your doubt here!</label>
                                    <textarea onChange={this.handleChange} name="query" id="query" cols="30" rows="10" className="rounded form-control p-2"></textarea>        
                                </div>
                            <div className="row d-flex justify-content-center">
                                <button style={{backgroundColor:"#d8953d", color:"#000"}} className="btn rounded is-op">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-7 r p-4">
                        {this.displayQueries(this.state.queries)}
                    </div>
                </div>
            </div>
        )
    }
}

// <textarea name="query" onChange={this.handleChange} value={this.state.query} class="rounded form-control" id="query-area" rows="20"></textarea>