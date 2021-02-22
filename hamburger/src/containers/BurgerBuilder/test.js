import React from "react";
import { useState } from "react";
import users from "./usersData";
import "./test.css";
import { element } from "prop-types";
function Test() {
  const [count, setCount] = useState(false);
  const showVal = () => {
    setCount(true);
  };
  return (
    <div>
      {/* {users.map((user, index) => (
        <div key={index} onMouseEnter={showVal}>
          <h3>{user.name}</h3>
          <p className={count ? "testShowVal" : "testHideVal"}>
            {user.location}
          </p>
          <p>{user.car}</p>
        </div>
      ))} */}
      {users.map((user, index) => {
        return (
          <div>
            <div key={index} onMouseEnter={showVal}>
              <h3>{user.name}</h3>
              <p className={count ? "testShowVal" : "testHideVal"}>
                {user.location}
              </p>
              <p>{user.car}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Test;
