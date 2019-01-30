import React, { Component, Fragment } from "react";
import Navbar from "./Navbar";
import Register from "./Register";
import Data from "./DataDisplay";
import Toasty from "./AlertPop";

var tempDb = [
  {
    user: 1,
    firstName: "Penny",
    lastName: "Hardway",
    email: "memphisFinest@email.com",
    password: "password1"
  },
  {
    user: 2,
    firstName: "Derrick",
    lastName: "Rose",
    email: "inYourDreamsPH1@email.com",
    password: "password2"
  },
  {
    user: 3,
    firstName: "Jalen",
    lastName: "Rose",
    email: "aRoseIsStillARose@email.com",
    password: "password3"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 0,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      database: [],
      hasData: false,
      validation: false,
      alertMsg: "",
      isActive: false
    };
  }

  componentDidMount() {
    this.setState({
      database: tempDb,
      hasData: true,
      user: tempDb.length
    });
  }

  registerInputChange = evt => {
    const { name, value } = evt.target;
    const key = name;
    const val = value;
    this.setState({
      [key]: val
    });
  };

  registerSubmitClicked = evt => {
    evt.preventDefault();
    let { user, firstName, lastName, email, password } = this.state;
    let count = user;
    count++;
    let data = {
      user: count,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };

    // input validation here
    this.setState({ validation: true }); // testing
    let temp = [];
    try {
      if (this.state.validation) {
        temp = [...this.state.database, data];
        this.setState({
          database: temp,
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          alertMsg: "success",
          isActive: true
        });
      }
    } catch (e) {
      this.setState({ alertMsg: "danger", isActive: false });
      console.log(e);
    }
  };

  handleAlertClose = () => {
    this.setState({ isActive: false });
  };

  render() {
    const alert =
      this.state.isActive && this.state.validation ? (
        <Toasty {...this.state} close={this.handleAlertClose} />
      ) : null;

    return (
      <Fragment>
        <Navbar />
        {alert}
        <div className="container-fluid App">
          <br />
          <div className="row">
            <div className="col-md-4 pb-4 pb-md-0">
              <Register
                {...this.state}
                change={this.registerInputChange}
                clicked={this.registerSubmitClicked}
              />
            </div>
            <div className="col">
              <Data {...this.state} />
            </div>
          </div>
          <br />
        </div>
      </Fragment>
    );
  }
}

export default App;
