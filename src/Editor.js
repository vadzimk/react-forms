import React from 'react';
import {FormValidator} from "./FormValidator";
import {ValidationMessage} from "./ValidationMessage";

export class Editor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nameInput: "", //instead of name
            terms: false,
            // flavor: "Vanilla",
            // toppings: [],
            // twoScoops: false,
            // comments: "",
            // email: "",
        };

        this.rules = {
            name: {required: true, minlength: 3, alpha: true},
            terms: {true: true}, //ensures that the checkbox of terms of use is checked true
            // email: {required: true, email: true},
            // comments: {required: false},
        };
    }

    flavors = ["Chocolate", "Double Chocolate", "Triple Chocolate", "Vanilla"];
    toppings = ["Sprinkles", "Fudge Sauce", "Strawberries", "Maple Syrop"];

    updateFormValue = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.value
            },
            // () => this.props.submit(this.state)
        )
    };

    updateFormValueCheck = (event) => {
        this.setState(
            {
                [event.target.name]: event.target.checked,
            }
        );
    };

// //handle multiple selections
//     updateFormValueOptions = (event) => {
//         let options = [...event.target.options].filter(o => o.selected).map(o => o.value);
//         this.setState(
//             {
//                 [event.target.name]: options
//             },
//             () => this.props.submit(this.state)
//         );
//     };
//
//     updateFormValueCheck = (event) => {
//         this.setState(
//             {
//                 [event.target.name]: event.target.checked,
//             },
//             () => this.props.submit(this.state)
//         );
//     };
//
//     updateFormValueCheckArray = (event) => {
//         event.persist(); //does not set properties of synthaticEvent to null after the first call of setState
//         this.setState((state) => {
//                 if (event.target.checked) {
//                     state.toppings.push(event.target.name);
//                 } else {
//                     let index = state.toppings.indexOf(event.target.name); //find the index of unchecked element
//                     state.toppings.splice(index, 1); //remove elements starting at index, count=1 element
//                 }
//             }, () =>
//                 this.props.submit(this.state)
//         );
//     };

    render() {
        return (
            <div className="h5 bg-info text-white p-2">
                <FormValidator data={this.state} rules={this.rules} submit={this.props.submit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control"
                               name="nameInput"
                               value={this.state.name}
                               onChange={this.updateFormValue}
                               placeholder="input name"
                        />
                        <ValidationMessage field="name"/>
                    </div>

                    <div className="form-group">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="terms"
                                checked={this.state.terms}
                                onChange={this.updateFormValueCheck}
                            />
                            <label className="form-check-label">Agree to terms</label>
                        </div>
                        <ValidationMessage field="terms"/>
                    </div>

                    <div>
                        <label>Email</label>
                        <input
                            className="form-control"
                            name="email"
                            value={this.state.email}
                            onChange={this.updateFormValue}
                        />
                        <ValidationMessage field="email"/>
                    </div>

                    {/*<div className="form-group">*/}
                    {/*<label>Ice Cream Flavors</label>*/}
                    {/*<select*/}
                    {/*className="form-control"*/}
                    {/*name="flavor"*/}
                    {/*value={this.state.flavor}*/}
                    {/*onChange={this.updateFormValue}*/}
                    {/*>*/}
                    {/*{this.flavors.map(flavor =>*/}
                    {/*<option value={flavor} key={flavor}>*/}
                    {/*{flavor}*/}
                    {/*</option>*/}
                    {/*)}*/}
                    {/*</select>*/}
                    {/*</div>*/}
                    {/*<div className="form-group">*/}
                    {/*<label>Ice Cream Toppings</label>*/}
                    {/*<select*/}
                    {/*className="form-control"*/}
                    {/*multiple={true} //multiple selection of options*/}
                    {/*name="toppings"*/}
                    {/*value={this.state.toppings}*/}
                    {/*onChange={this.updateFormValueOptions}*/}
                    {/*>*/}
                    {/*{this.toppings.map(top=>*/}
                    {/*<option value={top} key={top}>*/}
                    {/*{top}*/}
                    {/*</option>*/}
                    {/*)}*/}
                    {/*</select>*/}
                    {/*</div>*/}

                    {/********* radioButtons ********/}

                    {/*<div className="form-group">*/}
                    {/*<label>*/}
                    {/*Ice Cream Flavors*/}
                    {/*</label>*/}
                    {/*{this.flavors.map(flavor =>*/}
                    {/*<div className="form-check" key={flavor}>*/}
                    {/*<input className="form-check-input"*/}
                    {/*type="radio"*/}
                    {/*name="flavor"*/}
                    {/*value={flavor}*/}
                    {/*checked={this.state.flavor === flavor}*/}
                    {/*onChange={this.updateFormValue}*/}
                    {/*id={flavor}*/}
                    {/*/>*/}
                    {/*<label for={flavor} className="form-check-label">{flavor}</label>*/}
                    {/*</div>*/}
                    {/*)}*/}
                    {/*</div>*/}

                    {/*<div className="form-group">*/}
                    {/*<div className="form-check">*/}
                    {/*<input id="twoScoops"*/}
                    {/*className="form-check-input"*/}
                    {/*type="checkbox"*/}
                    {/*name="twoScoops"*/}
                    {/*checked={this.state.twoScoops}*/}
                    {/*onChange={this.updateFormValueCheck}*/}
                    {/*/>*/}
                    {/*<label for="twoScoops" className="form-check-label">*/}
                    {/*Two Scoops*/}
                    {/*</label>*/}
                    {/*</div>*/}
                    {/*</div>*/}

                    {/*<div className="form-group">*/}
                    {/*<label>Ice Cream Toppings</label>*/}
                    {/*{*/}
                    {/*this.toppings.map(top =>*/}
                    {/*<div className="form-check" key={top}>*/}
                    {/*<input*/}
                    {/*className="form-check-input"*/}
                    {/*type="checkbox"*/}
                    {/*name={top}*/}
                    {/*value={this.state[top]}*/}
                    {/*checked={this.state.toppings.indexOf(top) > -1}*/}
                    {/*onChange={this.updateFormValueCheckArray}*/}
                    {/*id={top}*/}
                    {/*/>*/}
                    {/*<label*/}
                    {/*for={top}*/}
                    {/*className="form-check-label"*/}
                    {/*>*/}
                    {/*{top}*/}
                    {/*</label>*/}

                    {/*</div>*/}
                    {/*)*/}
                    {/*}*/}
                    {/*</div>*/}

                    <div className="form-group">
                        <label>
                            Comments
                        </label>
                        <textarea
                            className="form-control"
                            name="comments"
                            value={this.state.comments}
                            onChange={this.updateFormValue}
                        />
                        <ValidationMessage field="comments"/>
                    </div>
                </FormValidator>
            </div>
        )
    }
}