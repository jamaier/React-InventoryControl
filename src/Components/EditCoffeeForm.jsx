import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

const EditCoffeeForm = (props) => {
  const { coffee } = props;

  function handleEditCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({
      name: event.target.name.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      id: coffee.id,
    });
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleEditCoffeeFormSubmission}
        buttonText="Update Coffee"
      />
    </>
  );
}

EditCoffeeForm.propTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func,
};

export default EditCoffeeForm;