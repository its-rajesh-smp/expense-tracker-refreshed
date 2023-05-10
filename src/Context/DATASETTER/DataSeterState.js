import React, { useEffect, useState } from "react";
import ItemCover from "../../Components/ItemCover/ItemCover";
import Item from "../../Components/Item/Item";
import DATASETTER_CONTEXT from "./DataSeterContext";
// DATABASE
import DB from "../../FIREBASE/Firebase-Config";
import {
  addDoc,
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";

const DATASETTER_PROVIDER = (props) => {
  // State To Update The Dom
  const [SETDATA, SETDATA_FUNC] = useState([]);

  // State To Grab Data from AddExpenseCard
  const [GETDATA, GETDATA_FUNC] = useState();

  // Expense References in FIRESTORE
  const EXPENSE_REFERENCE = collection(DB, "expenses");

  /* -------------------------------------------------------------------------- */
  /*                           GET DATA FROM FIRESTORE                          */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    async function GETDATAFUNCTION() {
      //* Get Data Sort By __Date__ ===> Latest First
      const RESPONSE = await getDocs(
        query(EXPENSE_REFERENCE, orderBy("date", "desc"),orderBy("time", "desc"),orderBy("name", "desc"))
      );

      // Get Data Array with Items
      const DATA_ARRAY = FORM_DATA_TEMPLETE(RESPONSE);

      // Set in DOM
      SETDATA_FUNC(DATA_ARRAY);
    }

    GETDATAFUNCTION();
  }, []);
  
  console.log(SETDATA);

  /* -------------------------------------------------------------------------- */
  /*                         STORE DATA ON FIREBASE                             */
  /* -------------------------------------------------------------------------- */

  useEffect(() => {
    // Send data Function

    async function ADD_DATA_ON_FIRESTORE(GETDATA) {
      const RESPONSE = await addDoc(EXPENSE_REFERENCE, GETDATA);

      const RESPONSE_KEY =RESPONSE.id
      const PERVIOUS_DATA=SETDATA

      console.log(RESPONSE_KEY);


    }

    // FunctionCall To Send Data to Firestore
    if (GETDATA != undefined) {
      ADD_DATA_ON_FIRESTORE(GETDATA);
    }
 

  }, [GETDATA]);

  return (
    <DATASETTER_CONTEXT.Provider value={{ GETDATA_FUNC, SETDATA }}>
      {props.children}
    </DATASETTER_CONTEXT.Provider>
  );
};








export default DATASETTER_PROVIDER;






/* -------------------------------------------------------------------------- */
/*                       Functions To Form Data Template                      */
/* -------------------------------------------------------------------------- */
// ! Function Explained In The README.md File
// Array Of Item
function FORM_DATA_TEMPLETE(res) {
  const NewDataArray = res.docs.map((val) => {
    let name = val._document.data.value.mapValue.fields.name.stringValue;
    let date = val._document.data.value.mapValue.fields.date.stringValue;
    let time = val._document.data.value.mapValue.fields.time.stringValue;
    let price = val._document.data.value.mapValue.fields.price.integerValue;
    let key = val.id;

    return (
      <Item
        data={{
          name,
          date,
          time,
          price,
          id: key,
        }}
        key={key}
      />
    );
  });

  // Array Of Item + ItemCover
  // ! Function Explained In The README.md File

  let bufferDate;
  const New_Item_With_ItemCover=[]

  NewDataArray.map((val)=>{

    if(bufferDate!==val.props.data.date){
      bufferDate=val.props.data.date
      let key=val.props.data.id
      New_Item_With_ItemCover.push(

        <ItemCover date={bufferDate} key={key} id={bufferDate}>
          {[val]}
        </ItemCover>
      )

    }
    else{
      New_Item_With_ItemCover[New_Item_With_ItemCover.length-1].props.children.push(val)
    }
  })
  return New_Item_With_ItemCover;
}

