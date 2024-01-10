import React, { useState } from "react";
import "../Ticket/Ticketpagecss.css";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, removeCart } from "../../Redux/Booking/Action";

const Innerticket = ({ val }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const { total, cart } = useSelector((state) => state.booking);
  console.log(total, cart, "Total");
  const Decrement = () => {
    if (count === 0) {
      console.log("count");
      setCount(0);
    } else {
      setCount(count - 1);
      dispatch(removeCart(val));
    }
  };

  const Increment = (val) => {
    setCount(count + 1);
    console.log(val);
    dispatch(addtoCart(val));
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
          <button onClick={() => Decrement(val)}>-</button>
          <p>{count}</p>
          <button onClick={() => Increment(val)}>+</button>
        </div>
      </div>
      <div>Remaining Ticket : {val.remainingTicket - count}</div>
    </div>
  );
};

export default Innerticket;
