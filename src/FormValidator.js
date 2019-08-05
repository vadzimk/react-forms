// This is a form validation component
// It must be an ancestor to the form fields so it can receive change events from the mas the y bubble up.
// It must also be an ancestor to the ValidationMessage components so that they have access to the validation messages through the shared context.


import React from 'react';
import {validation as ValidateData} from "validation";
import {ValidationContext} from "./ValidationContext";

export class FormValidator extends React.Component {
    state = {
        errors: {},
        dirty: {},
        formSubmitted: false,
        getMessagesForField: this.getMessagesForField,
    };


    // static method getDerivedStateFromProps returns a new state data object that is derived from state data. Because it is static it is unable to access any of the instance methods or properties  via this keyword.
    static getDerivedStateFromProps(props, state) {
        return {
            errors: ValidateData(props.data, props.rules)
        }
    }

    handleChange = (ev) => {
        let name = ev.target.name;
        this.setState(state => state.dirty[name] = true);
    };

    getButtonClasses = () => {
        return this.state.formSubmitted && !this.formValid
            ? "btn-danger"
            : "btn-primary";
    };

    get formValid() { //get method bound to the field formValid on the object
        return Object.keys(this.state.errors).length === 0;
    };

    handleClick = (ev) => {
        this.setState(
            {
                formSubmitted: true
            },
            () => {
                if (this.formValid) {
                    this.props.submit(this.props.data)
                }
            }
        );
    };

    getMessagesForField=(field)=>{
        return ((this.state.formSubmitted || this.state.dirty[field])
            ? this.state.errors[field] || []
            : []);
    };

    render() {

        return <>
            <ValidationContext.Provider value={this.state}>
                <div onChange={this.handleChange}> {/*the change event bubbles up from the form elements contained by the component */}
                    {this.props.children}
                </div>
            </ValidationContext.Provider>

            <div className="text-center">
                <button
                    className={`btn ${this.getButtonClasses()}`}
                    onClick={this.handleClick}
                    disabled={this.state.formSubmitted && !this.formValid} // disabled true after submitted if form is not valid
                >
                    Submit
                </button>
            </div>
        </>
    }
}