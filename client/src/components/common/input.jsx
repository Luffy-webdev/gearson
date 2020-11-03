import React from 'react';

const Input = ({name, label, error, ...rest}) => {

        return (
            <div className="form-row m-0">
                <div className="form-group ml-2">
                        <label className="is-white" htmlFor={name}>{label}</label>
                        <input
                    className="form-control"
                    {...rest}
                    name={name}
                    id={name}
                    />
                    {error && <div className="alert alert-danger alert-sm rounded">{error}</div>}
                </div>
            </div>

        );
}

export default Input;

