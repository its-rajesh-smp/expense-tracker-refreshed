import React, { useState } from "react";

import AddExpenseCard_Context from "./AddExpenseCardContext";



const AddExpenseCard_Provider=(props)=>{

    // State To On Off The AddEditCard
    const[setAddCard_BOOL,setAddCard_FUNC]=useState(false)



    return(
        <AddExpenseCard_Context.Provider value={{setAddCard_BOOL,setAddCard_FUNC}} >
            {props.children}
        </AddExpenseCard_Context.Provider>
    )
}


export default AddExpenseCard_Provider