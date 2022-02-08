import React from "react";
import Item from "./Item";
import { items } from "./helper";
import { useState } from "react";

const ItemList = ({items}) => {
    const [selectedItem, setSelectedItem] = useState(null) ;
    return (
        <div>
        <p>{selectedItem ? selectedItem.name : "Ninguno"}</p>

            {
                items.map(({id, name, price}) => (

                    <Item
                        
                        key = {id}
                        id={id}
                        name={name}
                        price = {price}
                        setSelectedItem = {setSelectedItem}
                        
                        
                        />
                    ))}
            
        </div>
    )
}

export default ItemList