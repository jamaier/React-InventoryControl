import React from "react";
import PropTypes from "prop-types";
import Coffee from "./Coffee";

const CoffeeList = (props) => {
  return (
    <>
      <hr />
      {props.coffeeList.map((coffee) => (
        <div>
          <Coffee
            whenCoffeeClicked={props.onCoffeeSelection}
            name={coffee.name}
            origin={coffee.origin}
            roast={coffee.roast}
            price={coffee.price}
            quantity={coffee.quantity}
            id={coffee.id}
            key={coffee.id}
          />
        </div>
      ))}
    </>
  );
};

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func,
};

export default CoffeeList;
