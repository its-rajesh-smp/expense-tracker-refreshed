import React, { useEffect, useRef, useState } from 'react';
import DataSend_Context from './DataSendContext';


const DataSendState_Provider=(props)=>{

    //  ! For Check is button is clicked or not
    const[checkBtnClick_BOOL, checkBtnClick_FUNC]=useState(false)

    // ! For Taking Data
    const[dataSetter,dataSetter_FUNC]=useState("")

    // !For Storing/Printing Data
    useEffect(()=>{
        if(!dataSetter==""){
            console.log(dataSetter);
        }
    },[dataSetter])



    return (
        <DataSend_Context.Provider value={{checkBtnClick_BOOL, checkBtnClick_FUNC , dataSetter_FUNC}}>
            {props.children}
        </DataSend_Context.Provider>
    )
}


export default DataSendState_Provider