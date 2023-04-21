import React from "react";
import PropTypes from "prop-types";
import Coffee from "./Coffee";

const CoffeeList = (props) => {
  const coffeeListStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "20px",
    padding: "20px",
  };
  return (
    <>
      <div style={coffeeListStyles}>
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
      </div>
    </>
  );
};

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func,
};

export default CoffeeList;
