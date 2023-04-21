import React from "react";
import PropTypes from "prop-types";

const ReusableForm = (props) => {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Coffee name' />
        <input
          type="text"
          name="origin"
          placeholder="Origin" />
        <select name="roast">
          <option value="Light">Light</option>
          <option value="Medium">Medium</option>
          <option value="Dark">Dark</option>
        </select>
        <input
          type='number'
          name='price'
          placeholder='Price' />
        <input
          type='number'
          name='quantity'
          placeholder='Quantity' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;