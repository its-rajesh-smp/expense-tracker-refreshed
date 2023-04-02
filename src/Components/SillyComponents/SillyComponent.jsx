import React, { useRef, useState } from "react"
import "./SillyComponent.css"


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
        <input className="InputFieldAddEdit-name" type="text" placeholder="Enter Name" ref={props.refs.name}  />
            <div>
                <input className="InputFieldAddEdit-date" type="date" ref={props.refs.date} />
                <input className="InputFieldAddEdit-time" type="time"  ref={props.refs.time}  />
            </div>
        <input className="InputFieldAddEdit-price" type="number" ref={props.refs.price}/>
    </div>
    )
}



export {HeadingDiv,TotalAmount,TitleWithIcon,InputFieldAddEdit}