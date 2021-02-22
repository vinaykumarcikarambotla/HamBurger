import { func } from "prop-types";
import React, { usestate } from "react";
import Pdata from "./productsData";
function Viewcart({ selItems }) {
  var cartData = [];
  selItems.map((ele) => {
    var temp = Pdata.map((x) => {
      if (ele == x.id) {
        cartData.push(x);
      }
    });
  });
  return (
    <div>
      <h1>In View Cart</h1>
      {cartData.length > 0 ? (
        <div>
          Items available
          {cartData.map((ele, index) => {
            return (
              <div key={index} className="product">
                <img src={ele.image_src} className="Pimg" />
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <b>No items into the cart</b>
        </div>
      )}
    </div>
  );
}

export default Viewcart;
