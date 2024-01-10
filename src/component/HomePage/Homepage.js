import React from "react";
import Ticket from "../Ticket/Ticket";
// import { Button } from "react-bootstrap";

const Homepage = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Welcome To Club</h2>
      <Ticket />
      {/* <Button variant="secondary">Book hh</Button> */}
    </div>
  );
};

export default Homepage;
