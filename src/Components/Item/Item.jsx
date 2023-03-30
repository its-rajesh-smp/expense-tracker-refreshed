import React from "react";
import "./Item.css"



function Item(props){


    return (

        <div className="item">
            <div className="item-div">
                <p className="item_Name">{props.data.name}</p>
                <div className="item-div--div" >
                    <p className="item_Date" >{props.data.date}</p>
                    <p className="item_Time" >{props.data.time}</p>
                </div>
            </div>
            <p><span className="item_Price">{props.data.price}</span> $</p>
        </div>
    )
}





export default Item;
