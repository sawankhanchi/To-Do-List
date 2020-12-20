import React, { useState } from "react";
import ToDoLists from "./ToDoLists";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const App = () => {

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
};

  return (
    <>
    <div className="main_div">
      <div className="center_div">
         <br />
         <h1> ToDO List </h1>
         <br />
         <input 
         type="text" 
         placeholder="Add a Items"
         Value={inputList} 
         onChange={itemEvent} 
         />
         <Tooltip title="Add">
         <Button onClick={listOfItems} className="btn_green">
         <AddIcon />
         </Button>
         </Tooltip>

         <ol>
           {/* <li> {inputList} </li> */}

           {Items.map((itemval, index) => {
            return <ToDoLists 
              key={index} 
              id={index} 
              text={itemval} 
              onSelect={deleteItems}
              />;
           })}
    
         </ol>
      </div>
    </div>
    </>
  );
};

export default App;
