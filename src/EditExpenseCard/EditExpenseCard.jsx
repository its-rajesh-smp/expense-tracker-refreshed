import React, { useState } from "react";
import './EditExpenseCard.css'
import {BlurCard} from "../Cards/Card"
import { TitleWithIcon,InputFieldAddEdit } from "../SillyComponents/SillyComponent";

function EditExpenseCard(props) {

    return (
        <BlurCard>
            <div className="Edit_Card">
                <TitleWithIcon title="Edit" icon={<i className='bx bx-window-close' ></i>}/>

                <InputFieldAddEdit/>

                <div className="Edit_Card_buttonGroup">
                    <button className="Edit_Card-buttonGroup_1" ><i className='bx bxs-message-square-edit' ></i></button>
                    <button className="Edit_Card-buttonGroup_2" ><i className='bx bxs-message-square-minus' ></i></button>
                </div>
            </div>
        </BlurCard>
    )
}

export default EditExpenseCard;