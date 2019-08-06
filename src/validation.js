//will validate form data using validator package

import validator from 'validator';

export function validateData(data, rules) {
    let errors = {};
    Object.keys(data).forEach(field => { //for each property of data object
        if (rules.hasOwnProperty(field)) { //if there is such a rule
            let fieldErrors = [];
            let val = data[field];


            if (rules[field].true) {
                if (!val) {
                    fieldErrors.push("Must be checked");
                }
            } else {

                if (rules[field].required && validator.isEmpty(val)) { //the field is required and value is empty
                    fieldErrors.push("Value required");
                }
                if (!validator.isEmpty(data[field])) { //if the value at the data field is not empty
                    if (rules[field].minlength && !validator.isLength(val, rules[field].minlength)) { //if the there is minlength rule and val is not in range
                        fieldErrors.push(`Enter at least ${rules[field].minlength} characters`);
                    }
                    if (rules[field].alpha && !validator.isAlpha(val)) {
                        fieldErrors.push("Enter only letters");
                    }
                    if (rules[field].email && !validator.isEmail(val)) {
                        fieldErrors.push("Enter a valid email address");
                    }

                    //ensures matching values
                    if(rules[field].equals && !validator.equals(val, data[rules[field].equals])){
                        fieldErrors.push("Values don't match");
                    }

                }
            }
            if (fieldErrors.length > 0) {
                errors[field] = fieldErrors;
            }


        }
    });
    return errors;
}