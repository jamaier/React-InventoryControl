import React from "react";
import PropTypes from "prop-types";

function CoffeeDetails(props) {
  const { coffee } = props;

  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h4>Name: {coffee.name}</h4>
      <p>Origin: {coffee.origin}</p>
      <p>Roast: {coffee.roast}</p>
      <p>Price: {coffee.price}</p>
      <p>Quantity: {coffee.quantity}</p>

      <button onClick={props.onClickingEdit}>Update Coffee</button>
      <button onClick={() => props.onDeleteCoffee(coffee.id)}>Delete Coffee</button>
      <button onClick={() => props.onDecrementCoffee(coffee)}>Sell</button>
      <hr />
    </React.Fragment>
  );
}

CoffeeDetails.propTypes = {
  coffee: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onDeleteCoffee: PropTypes.func,
  onDecrementCoffee: PropTypes.func,
};

export default CoffeeDetails;