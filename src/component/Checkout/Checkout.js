import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { total_price } = useSelector((state) => state.booking);

  return <div>Checkout{total_price}</div>;
};

export default Checkout;
