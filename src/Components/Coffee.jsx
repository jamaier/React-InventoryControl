import React from "react";
import PropTypes from "prop-types";

const Coffee = (props) => {
  return (
    <>
      <h4>Coffee name: {props.name}</h4>
      <p>Price: {props.price}</p>
      <p>Quantity: {props.quantity}</p>
    </>
  )
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
}

export default Coffee;