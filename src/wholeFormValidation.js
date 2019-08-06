// some types of validation cannot be performed on individual values such as ensuring that combinations of choices are consistent. this sort of validation can be performed only when the user has entered valid data into the form and submitted it, at which point an application can perform a final set of checks before processing data.

export function ValidateForm(data){

    let errors = [];

    if(!data.email.endsWith("@example.com")){
        errors.push("Only example.com users are allowed");
    }

    if(!data.email.toLowerCase().startsWith(data.nameInput.toLowerCase())){

        errors.push("Email address must start with name");
    }

    if(data.nameInput.toLowerCase() === "joe"){
        errors.push("Go away, Joe!")
    }

    return errors;
}