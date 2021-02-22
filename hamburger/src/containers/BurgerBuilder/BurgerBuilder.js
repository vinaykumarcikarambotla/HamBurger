import React, { Component } from "react";
import Aux from "../../hoc/Auxx";
import users from "./usersData";
import Test from "./test";
import Pdata from "./productsData";
import Product from "./Product";
import Viewcart from "./viewCart";
import { useState } from "react";
function BurgerBuilder() {
  const [cartItems, setcartItems] = useState([]);
  const [showItems, setshowItems] = useState(false);
  const addCartItemsfromChild = (pId) => {
    var t1 = cartItems;
    t1.push(pId);
    setcartItems(t1);
  };

  const changeshowItems = () => {
    setshowItems(!showItems);
  };

  return (
    <Aux>
      <div>Burger</div>
      <div>Build Controls</div>
      <h1>
        <button onClick={changeshowItems}>View Cart Items</button>
      </h1>
      {showItems ? (
        <Viewcart selItems={cartItems} />
      ) : (
        <div>
          {Pdata.map((product, index) => {
            return (
              <div>
                <Product
                  key={index}
                  pId={product.id}
                  Imgsrc={product.image_src}
                  poptions={product.options}
                  pMethod={addCartItemsfromChild}
                />
              </div>
            );
          })}
        </div>
      )}
    </Aux>
  );
}
export default BurgerBuilder;
