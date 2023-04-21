import React from "react";
import Coffee from "./Coffee";

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterCoffeeList: []
    };
  }
}

export default CoffeeControl;