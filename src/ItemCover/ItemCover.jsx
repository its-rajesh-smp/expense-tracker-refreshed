import React from "react"
import "./ItemCover.css"


// Iterm Wrapper Card
function ItemCover(props){
    return(
        <div className="Item_Cover-div">
            <span className="Item_Cover-div--span">{props.date}</span>
            {props.children}
        </div>
    )
}


export default ItemCover;