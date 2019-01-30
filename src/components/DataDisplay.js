import React, { Fragment } from "react";

const data = props => {
  const dataRow = props.hasData
    ? props.database.map(el => (
        <tr key={el.user}>
          <th key={el.user} scope="row">
            {el.user}
          </th>
          <td>{el.firstName}</td>
          <td>{el.lastName}</td>
          <td>{el.email}</td>
          <td>{el.password}</td>
        </tr>
      ))
    : null;

  return (
    <Fragment>
      <table className="table table-responsive-md table-bordered table-striped text-center">
        <thead className="thead-light">
          <tr>
            <th scope="col">User Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody key={props.database.user}>{dataRow}</tbody>
      </table>
    </Fragment>
  );
};

export default data;
