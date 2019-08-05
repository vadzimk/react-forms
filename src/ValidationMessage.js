//Displays validation messages alongside the form elements

import React from 'react';
import {ValidationContext} from "./ValidationContext";

export class ValidationMessage extends React.Component {


    static contextType = ValidationContext; // contextType property is a simplified Context API, it is available throughout the component as this.context

    render() {

        return this.context.getMessagesForField(this.props.field).map(err =>
            <div className="small bg-danger text-white mt-1 p-1" key={err}>
                {err}
            </div>
        )
    }

}