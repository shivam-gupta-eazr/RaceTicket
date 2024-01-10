import React from "react";
import { useSelector } from "react-redux";
import Detailform from "./Detailform";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { proceedData } from "../../Redux/Booking/Action";

const Formcomp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { total, cart } = useSelector((state) => state.booking);
  console.log(total, cart);

  const Displayforms = cart.sort((a, b) => {
    return a.id - b.id;
  });

  const proceedBtn = () => {
    dispatch(proceedData());
    navigate("/checkout");
    console.log("proceed");
  };
  console.log(Displayforms, "DisplayForms");
  return (
    <div style={{}}>
      <h1 style={{ textAlign: "center" }}>Detail Form</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {cart.map((val, key) => {
          return <Detailform val={val} key={key} />;
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="primary" onClick={() => proceedBtn()}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Formcomp;
