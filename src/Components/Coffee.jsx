import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  const coffeeStyles = {
    border: "1px solid black",
    padding: "10px",
    margin: "10px",
    width: "300px",
    height: "300px",
    display: "inline-block",
    textAlign: "center",
  };
  return (
    <React.Fragment>
      <div
        style={coffeeStyles} 
        onClick={() => props.whenCoffeeClicked(props.id)}>
        <h3>Name: {props.name}</h3>
        <p>Origin: {props.origin}</p>
        <p>Roast: {props.roast}</p>
        <p>Price: $ {props.price} / lb</p>
        <p>Inventory: {props.quantity}</p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func,
};

export default Coffee;
