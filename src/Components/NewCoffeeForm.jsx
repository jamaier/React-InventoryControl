import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { v4 } from "uuid";

function NewCoffeeForm(props) {
  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewCoffeeFormSubmission}
        buttonText="Add"
      />
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func,
};

export default NewCoffeeForm;
