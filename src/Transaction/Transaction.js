import React, { useState } from "react";
import "./Transaction.css";
import FilterField from "../FilterField/FilterField"
import AddHoverBtn from "../AddHoverBtn/AddHoverBtn"
import { TotalAmount } from "../SillyComponents/SillyComponent";
import Item from "../Item/Item";
import ItemCover from "../ItemCover/ItemCover";
import AddExpenseCard from "../AddExpenseCard/AddExpenseCard"
import EditExpenseCard from"../EditExpenseCard/EditExpenseCard"


function Transaction() {




    return (
        <>
            <AddHoverBtn/>
            {/* <AddExpenseCard/> */}
            {/* <EditExpenseCard/> */}
            <FilterField/>

            <TotalAmount amount={200} />

            {/* 🔴🔴🔴🔴 Dynamic Data 🔴🔴🔴🔴 */}
            <ItemCover date="2022-03-0" >
                <Item name="Sim Card" price="-6" date="2022-03-05" time="04:01:10" />
                <Item name="Mobile" price="-200" date="2022-03-05" time="07:06:10" />
                <Item name="Mobile" price="-200" date="2022-03-05" time="07:06:10" />
                <Item name="Mobile" price="-200" date="2022-03-05" time="07:06:10" />
            </ItemCover>


        </>
    )

}
export default Transaction;
