import React from "react";
import CoffeeList from "./CoffeeList";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeDetail from "./CoffeeDetail";

class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterCoffeeList: [],
      selectedCoffee: null,
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

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedCoffee != null) {
      currentlyVisibleState = (
        <CoffeeDetail coffee={this.state.selectedCoffee} />
      );
      buttonText = "Return to Coffee List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList} />
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
