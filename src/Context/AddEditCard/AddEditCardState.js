import React, { useState } from 'react';

import ADDEDITCARD_CONTEXT from './AddEditCardContext';



const ADDEDITCARD_PROVIDER=(props)=>{

    // State To Toggle Add Edit Card
    const[TOGGLE_CARD_BOOL,TOGGLE_CARD_FUNC]=useState(false)


    return (
        <ADDEDITCARD_CONTEXT.Provider value={{TOGGLE_CARD_BOOL,TOGGLE_CARD_FUNC}}>
            {props.children}
        </ADDEDITCARD_CONTEXT.Provider>
    )

}


export default ADDEDITCARD_PROVIDER;