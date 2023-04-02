import React, { useEffect, useState } from 'react';
import DATASETTER_CONTEXT from './DataSeterContext';


const DATASETTER_PROVIDER=(props)=>{

    // State To Grab Data from AddExpenseCard
    const[GETDATA,GETDATA_FUNC]=useState()


    /* -------------------------------------------------------------------------- */
    /*                         STORE DATA ON FIREBASE                             */
    /* -------------------------------------------------------------------------- */

    useEffect(()=>{
    


    },[GETDATA])




    return (
        <DATASETTER_CONTEXT.Provider value={{GETDATA_FUNC}}>
            {props.children}
        </DATASETTER_CONTEXT.Provider>
    )
}



export default DATASETTER_PROVIDER;