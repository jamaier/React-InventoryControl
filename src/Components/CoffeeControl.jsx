import React from "react";
import CoffeeList from "./CoffeeList";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeDetail from "./CoffeeDetail";
import EditCoffeeForm from "./EditCoffeeForm";

class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterCoffeeList: [],
      selectedCoffee: null,
      editing: false,
    };
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMasterCoffeeList = this.state.masterCoffeeList.concat(newCoffee);
    this.setState({
      masterCoffeeList: newMasterCoffeeList,
      formVisibleOnPage: false,
    });
  };

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.masterCoffeeList.filter(
      (coffee) => coffee.id === id
    )[0];
    this.setState({ selectedCoffee: selectedCoffee });
  };

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMasterCoffeeList = this.state.masterCoffeeList
      .filter((coffee) => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
    this.setState({
      masterCoffeeList: editedMasterCoffeeList,
      editing: false,
      selectedCoffee: null,
    });
  };

  handleEditClick = () => {
    this.setState({
      selectedCoffee: this.state.selectedCoffee,
      editing: true,
    });
  };

  handleDeletingCoffee = (id) => {
    const newMasterCoffeeList = this.state.masterCoffeeList.filter(
      (coffee) => coffee.id !== id
    );
    this.setState({
      masterCoffeeList: newMasterCoffeeList,
      selectedCoffee: null,
    });
  };

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleDecreaseQuantity = (coffee) => {
    if (coffee.quantity > 0) {
      const newQuantity = coffee.quantity - 1;
      const updatedCoffee = { ...coffee, quantity: newQuantity };
      const previousCoffeeList = this.state.masterCoffeeList.filter(
        (c) => c.id !== coffee.id
      );
      this.setState({
        masterCoffeeList: [...previousCoffeeList, updatedCoffee],
      });
    }
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedCoffee != null) {
      currentlyVisibleState = (
        <CoffeeDetail
          coffee={this.state.selectedCoffee}
          onClickingEdit={this.handleEditClick}
          onDeleteCoffee={this.handleDeletingCoffee}
          onDecrementCoffee={this.handleDecreaseQuantity}
        />
      );
      buttonText = "Return to Coffee List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList} />
      );
      buttonText = "Return to Coffee List";
    } else if (this.state.editing) {
      currentlyVisibleState = (
        <EditCoffeeForm
          coffee={this.state.selectedCoffee}
          onEditCoffee={(coffee) => this.handleEditingCoffeeInList(coffee)}
        />
      );
      buttonText = "Return to Coffee List";
    } else {
      currentlyVisibleState = (
        <CoffeeList
          coffeeList={this.state.masterCoffeeList}
          onCoffeeSelection={this.handleChangingSelectedCoffee}
        />
      );
      buttonText = "Add Coffee";
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default CoffeeControl;
