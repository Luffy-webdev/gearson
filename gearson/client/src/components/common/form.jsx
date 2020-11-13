import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import axios from 'axios';
export default class Form extends Component {
    state = {
        data:{},
        errors:{}
    }
    getResult = bool => {
        this.setState({showResult:bool})
    };
    validate = () => {
        const options = { abortEarly:false };
        const { error } = Joi.validate(this.state.data, this.schema, options);
        if(!error) return null;

        const errors = {};
        for(let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };
    validateProperty = ({name, value}) => {
        const obj = {[name]: value};
        const schema = {[name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    handleSubmit = e => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {} });
        this.doSubmit();
    };
    resetUserInputs = () => {
        this.setState({
          data:{
            name:"",
            email:""
          },
          errors:{}
        });
    };
    handleChange = ({currentTarget:input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({data, errors});
    };
    handleSlide = ({currentTarget:input}) => {
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({ data });
    };
    handleRadio = ({currentTarget:input}) => {
        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({ data });
    };
    handleProcess = e => {
        const data = {...this.state.data};
        data[e.target.name] = e.target.value;
        this.setState({ data });
    };
    handleMaterial = e => {
        const data = {...this.state.data};
        data[e.target.name] = e.target.value;
        this.setState({ data });
    };
    handlegearProcesses = async() => {
        const { data } = await axios.get("http://localhost:9000/gearprocesses");
        this.setState({processes:data});
    }
    handlegearMaterials = async() => {
        const { data } = await axios.get("http://localhost:9000/gearmaterials");
        this.setState({materials:data});
    }
    renderButton(label) {
        return (
            <button onClick={() => this.getResult(true)} disabled={this.validate()} className="btn btn-danger btn-lg rounded">{label}</button>
            );
    };
    renderInput(name, label, type="number") {
        const { data, errors } = this.state;
        return (
                <Input
                error={errors[name]}
                name={name}
                label={label}
                placeholder={label}
                value={data[name]}
                id={name}
                type={type}
                onChange={this.handleChange}/> 
            );
    };
    renderRadio(name, label, onChange, value) {
        const { data } = this.state;
        return (
            <div class="form-check form-check-inline m-4">
                <input class="form-check-input" type="radio" name={name} id={name} value={value} onChange={onChange} />
                <label class="form-check-label" for={name}>{label}</label>
            </div>
            );
    };
}
