import React from "react";
import "./test.css";

function Product({ key, pId, Imgsrc, poptions, pMethod }) {
  function productFunc(pId) {
    alert(pId);
  }

  return (
    <div key={key} className="product">
      <img src={Imgsrc} className="Pimg" />
      <div className="child">
        <div>
          <button
            style={{
              borderRadius: "5px",
              border: "1px solid #d4d5d9",
              color: "#282c3f",
              letterSpacing: ".3px",
              display: "-webkit-inline-box",
              display: "-ms-inline-flexbox",
              display: "inline-flex",
              WebkitBoxOrient: "vertical",
              WebkitBoxDirection: "normal",
              msFlexDirection: "column",
              WebkitBoxPack: "center",
              justifyContent: "center",
              marginTop: "10px",
              marginBottom: "20px",
              left: 0,
              top: "250px",
              backgroundColor: "#fff",
              padding: "10px",
              WebkitBoxSizing: "border-box",
              boxSizing: "border-box",
            }}
            // onClick={() => {
            //   productFunc(pId);
            //   //   console.log(key);
            //   debugger;
            // }}
            onClick={() => {
              pMethod(pId);
            }}
          >
            Add to cart
          </button>
        </div>
        {poptions.map((ele) => {
          return (
            <div
              style={{
                float: "left",
                width: "auto",
                marginRight: "3px",
                color: "black",
                padding: "1px",
                backgroundColor: "white",
                borderRadius: "5px",
              }}
            >
              <div style={{ padding: "5px" }}>{ele.value}</div>
            </div>
          );
        })}
      </div>
      <div style={{ display: "inline-block", marginLeft: "10px" }}>
        {/* <p>Size : M</p> */}
        <p style={{ color: "white" }}>Brand : Reebok</p>
      </div>
    </div>
  );
}

export default Product;
