import { useState } from "react";
import Item from "./Item";
import {items} from "./helper";
import ItemList from "./itemList";
import { task } from "./helper";
import { useEffect } from "react";

const ItemListContainer = () => {
  useEffect (() => {
    task .then (res => setTimeout (res))
  }, [])
  return ( 
    <div>
        <h1>Producto Seleccionado:</h1>
        <hr/>
      
        {<ItemList items={items}/>}

    </div>)
  
  

  
};

export default ItemListContainer;
