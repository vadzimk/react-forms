import React from 'react';


//stores validation issues for each form element as an array and displays messages for each of the issues alongside the element. The context's function will return the validation message for a specific field.
export const ValidationContext = React.createContext(
    {
        getMessagesForField: (field) => []
    }
);

