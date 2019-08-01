import React from 'react';

export class Editor extends React.Component {


    state = {
        nameInput: "", //instead of name
    };

    updateFormValue=(event)=>{
        this.setState(
            {
                [event.target.name]: event.target.value
            },
            ()=>this.props.submit(this.state)
        )
    };

    render() {
        return (
            <div className="h5 bg-info text-white p-2">
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control"
                           name="nameInput"
                           value={this.state.name}
                           onChange={this.updateFormValue}
                           placeholder="input name"
                    />
                </div>
            </div>
        )
    }
}