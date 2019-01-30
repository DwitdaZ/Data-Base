import React from "react";
import Input from "./Input";

const register = props => {
  const { firstName, lastName, email, password } = props;
  return (
    <div className="card">
      <div className="card-body">
        <form>
          <h3 className="text-center">Register</h3>
          <hr />
          <div className="form-group">
            <label htmlFor="fname">First Name</label>
            <Input
              classlist="form-control"
              id="fname"
              inpType="text"
              inpName="firstName"
              inpValue={firstName}
              handleChange={props.change}
              defText="Enter first name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Last Name</label>
            <Input
              classlist="form-control"
              id="lname"
              inpType="text"
              inpName="lastName"
              inpValue={lastName}
              handleChange={props.change}
              defText="Enter last name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Input
              classlist="form-control"
              id="email"
              inpType="email"
              inpName="email"
              inpValue={email}
              handleChange={props.change}
              defText="Enter email address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pword">Password</label>
            <Input
              classlist="form-control"
              id="pword"
              inpType="password"
              inpName="password"
              inpValue={password}
              handleChange={props.change}
              defText="Enter a password"
            />
            <small className="text-muted">
              Password must contain at least 6 characters
            </small>
          </div>
          <hr />
          <button
            onClick={props.clicked}
            className="btn btn-primary btn-block"
            type="button"
            id="regBtn"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
export default register;
