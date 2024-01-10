import React from "react";
import data from "../data.json";
import "./Ticketpagecss.css";
import Innerticket from "../InnerTicket/Innerticket";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Ticket = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { total, cart } = useSelector((state) => state.booking);
  console.log(total, cart, "Ticket");

  const BookTicket = () => {
    console.log("hii");
    navigate("/detail");
  };
  return (
    <>
      <div className="container">
        <div className="wrapper">
          {data.map((val, id) => {
            return <Innerticket val={val} key={id} />;
          })}
        </div>
        Total Ticket:{total}
        <button onClick={BookTicket}>Book</button>
      </div>
    </>
  );
};

export default Ticket;
