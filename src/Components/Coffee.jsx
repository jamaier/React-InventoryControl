import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenCoffeeClicked(props.id)}>
        <h3>Name: {props.name}</h3>
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
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func,
};

export default Coffee;
