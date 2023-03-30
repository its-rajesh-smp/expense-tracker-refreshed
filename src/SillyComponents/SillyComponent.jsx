import React, { useState } from "react"
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

    // State To grab data when ever someone type something in the input fields
    const[name,Fname]=useState("")
    const[date,Fdate]=useState("")
    const[time,Ftime]=useState("")
    const[price,Fprice]=useState("")

    //new object to sotore the data and pass as an object to Transactions 
    let NewObject={
        name:name,
        date:date,
        time:time,
        price:price
    }

    // Send Data to Transection
    if(props.checkIsbuttonClicked===true){props.grabDataOnButtonSubmit(NewObject)}

    return (
        <div className="InputFieldAddEdit-div">
        <input className="InputFieldAddEdit-name" type="text" placeholder="Enter Name" onChange={(e)=>{Fname(e.target.value)}}  />
            <div>
                <input className="InputFieldAddEdit-date" type="date" onChange={(e)=>{Fdate(e.target.value)}} />
                <input className="InputFieldAddEdit-time" type="time" onChange={(e)=>{Ftime(e.target.value)}}   />
            </div>
        <input className="InputFieldAddEdit-price" type="number" onChange={(e)=>{Fprice(e.target.value)}}  />
    </div>
    )
}



export {HeadingDiv,TotalAmount,TitleWithIcon,InputFieldAddEdit}