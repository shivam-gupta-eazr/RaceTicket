import React, { useState } from "react";
import "../Ticket/Ticketpagecss.css";

const Innerticket = ({ val }) => {
  const [count, setCount] = useState(0);
  const Decrement = () => {
    if (count === 0) {
      console.log("count");
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const Increment = () => {
    setCount(count + 1);
  };
  console.log(count);
  return (
    <div className="singlewrapper">
      <h1 style={{ textAlign: "center" }}>{val.Name}</h1>
      <div className="content">
        <h1>
          ₹{val.Price}/<span className="person">per</span>
        </h1>
        <p>{val.date}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="buttons">
          <button onClick={Decrement}>-</button>
          <p>{count}</p>
          <button onClick={Increment}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Innerticket;
