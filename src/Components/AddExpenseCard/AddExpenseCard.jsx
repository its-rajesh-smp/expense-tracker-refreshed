import React,{useContext, useEffect} from "react";
import "./AddExpenseCard.css";
import {BlurCard} from "../Cards/Card"
import {
  TitleWithIcon,
  InputFieldAddEdit,
} from "../SillyComponents/SillyComponent";


// Context
import AddExpenseCard_Context from "../../Context/AddExpenseCard_State_Context/AddExpenseCardContext";
import DataSend_Context from "../../Context/DataSendState_Context/DataSendContext";




function AddExpenseCard() {

  //! Close AddExpenseCard
  const context_addExpenseCard=useContext(AddExpenseCard_Context)



  //! Send Data To Transaction And Storage on Btn Submit Is Clicked
  const context_DataSend=useContext(DataSend_Context)


  function BtnSubmitSendData(){
    // This state function will make the check true if someone click on the button
    context_DataSend.checkBtnClick_FUNC(true)
  }
  

  //! If BtnSubmitSendData is triggerd or if checkBtnClick_BOOL become true then dissapare
  useEffect(()=>{
    if(context_DataSend.checkBtnClick_BOOL){
      context_addExpenseCard.setAddCard_FUNC(false)
    }
  },[context_DataSend.checkBtnClick_BOOL])






  return (
    // =====================
    <BlurCard>
      <div className="Add_Card">


        <TitleWithIcon
          title="Add"
          icon={
            <i
            className="bx bx-window-close"
            onClick={()=>{context_addExpenseCard.setAddCard_FUNC(false)}}  
            ></i>
          }
        />


          <InputFieldAddEdit/>


        <button className="Add_Card-button">
          <i
            className="bx bxs-message-square-add"
            onClick={BtnSubmitSendData}
          ></i>
        </button>


      </div>
    </BlurCard>
    // =====================
  );
}

export default AddExpenseCard;
