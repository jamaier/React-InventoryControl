import React from "react";
import PropTypes from "prop-types";

function CoffeeDetails(props) {
  const { coffee } = props;

  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h4>Name: {coffee.name}</h4>
      <p>Price: {coffee.price}</p>
      <p>Quantity: {coffee.quantity}</p>

      <button onClick={props.onClickingEdit}>Update Coffee</button>
      <hr />
    </React.Fragment>
  );
}

CoffeeDetails.propTypes = {
  coffee: PropTypes.object,
  onClickingEdit: PropTypes.func
};

export default CoffeeDetails;
