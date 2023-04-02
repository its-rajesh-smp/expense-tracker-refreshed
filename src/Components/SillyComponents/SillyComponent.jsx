import React,{useContext, useEffect, useRef, useState}  from "react";
import "./SillyComponent.css";



// Contexts
import DataSend_Context from "../../Context/DataSendState_Context/DataSendContext";



//!==============HEADING__DIV
function HeadingDiv(props){
    let date=new Date()
    let getDate=date.toLocaleDateString()
    
    return (
        <div className="Heading-div">
            <h1>{props.name}</h1>
            <p style={{marginLeft:"10px"}}>Today: </p>
            <p style={{marginLeft:"10px"}}>{getDate}</p>
        </div>

    )
}

//!===============TOTAL__AMOUNT
function TotalAmount(props){
    return(
        <div className="TotalAmount-Div" style={{fontWeight:600}} >
            <p>Total:</p>
            <p><span>{props.amount}</span> $</p>
        </div>
    )
}



//!===============TitleWithIcon
function TitleWithIcon(props){
    return(
        <div className="TitleWithIcon-div">
            <p >{props.title}</p>
            {props.icon}
        </div>
    )
}

//!==============InputFieldForAdd
function InputFieldAddEdit(props){


    




    return (
        <div className="InputFieldAddEdit-div">
        <input className="InputFieldAddEdit-name" type="text" placeholder="Enter Name" ref={name}/>
            <div>
                <input className="InputFieldAddEdit-date" type="date"  ref={date}/>
                <input className="InputFieldAddEdit-time" type="time"   ref={time} />
            </div>
        <input className="InputFieldAddEdit-price" type="number" ref={price}  />
    </div>
    )
}



export {HeadingDiv,TotalAmount,TitleWithIcon,InputFieldAddEdit}