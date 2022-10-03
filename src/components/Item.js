import React,{ useState } from "react";

function Item({ name, category }) {
const [itemInCart, setItemInCart]=useState(false)
const handleItemClick=()=>{
  setItemInCart(prev=>!prev)
}
  return (
    <li className={itemInCart ?"in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={itemInCart?"remove From Cart": "add to cart"} onClick={handleItemClick}> {itemInCart?"Remove From Cart":  "Add to Cart"}</button>
    </li>
  );
}

export default Item;
