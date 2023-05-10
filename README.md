<!--! ----------------------------------------------------------------------- -->
<!--!                     FORM_DATA_TEMPLETE EXPLANATION                      -->
<!--! ----------------------------------------------------------------------- -->

<!--
?We are getting data from firestore so i created a array to store the items (Not itemCover)
?This Section is so simple we are getting data and forming a component and store in an array.

const NewDataArray = res.docs.map((val) => {
let name = val.\_document.data.value.mapValue.fields.name.stringValue;
let date = val.\_document.data.value.mapValue.fields.date.stringValue;
let time = val.\_document.data.value.mapValue.fields.time.stringValue;
let price = val.\_document.data.value.mapValue.fields.price.integerValue;
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


-->

<!--! COMPLEX -->

<!--
? BufferDate ==> Changet its value if we encountr the unique date not the similar
? New_Item_With_ItemCover ==> Store the whole Item + Item Cover




? As we have an array of item component i am iterating on it and checking if current item date is unique or not


let bufferDate;
  const New_Item_With_ItemCover=[]

  NewDataArray.map((val)=>{

? if it is not that means a unique date is encountered 
todo so we need to create a new item cover and store that item into it


    if(bufferDate!==val.props.data.date){
      bufferDate=val.props.data.date
      New_Item_With_ItemCover.push(

        <ItemCover date={bufferDate} key={Math.random()}>
          {[val]}
        </ItemCover>
      )
    }


? if it is that means we have an existing itemCover with the same date
todo We have to only push the current item component to it

    else{
      New_Item_With_ItemCover[New_Item_With_ItemCover.length-1].props.children.push(val)
    }
  })

? at the end return the New_Item_With_ItemCover to update the dom

  return New_Item_With_ItemCover;

 -->
