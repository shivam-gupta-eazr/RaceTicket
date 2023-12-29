import React from "react";
import data from "../data.json";
import "./Ticketpagecss.css";
import Innerticket from "../InnerTicket/Innerticket";

const Ticket = () => {
  console.log(data);
  return (
    <>
      <div className="container">
        <div className="wrapper">
          {data.map((val, id) => {
            return <Innerticket val={val} key={id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Ticket;
