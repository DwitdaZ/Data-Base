import React, { Fragment } from "react";

// make entries dynamic
const toasty = props => {
  const alertStyle = {
    borderRadius: "20px",
    position: "absolute",
    zIndex: "4"
  };

  let divStyle = ["mr-auto", "alert", "text-center", "col-md-4", "offset-md-4"];
  let msg = ""; //temp value
  switch (props.alertMsg) {
    case "success":
      divStyle.push("alert-success");
      msg = (
        <Fragment>
          <h4 className="alert-heading">Success</h4>
          <p>Your new account has been registered successfully!!</p>
          <hr />
          <p>Proceed to Login page</p>
        </Fragment>
      );
      break;
    case "danger":
      divStyle.push("alert-danger");
      msg = (
        <Fragment>
          <h4 className="alert-heading">Success</h4>
          <p>Error, registration failed</p>
          <hr />
          <p>Check your inputs</p>
        </Fragment>
      );
      break;
    case "warning":
      divStyle.push("alert-warning");
      msg = (
        <Fragment>
          <h4 className="alert-heading">Warning</h4>
          <p>A warning here</p>
          <hr />
          <p>Whoa there partner</p>
        </Fragment>
      );
      break;
    case "info":
      divStyle.push("alert-info");
      msg = (
        <Fragment>
          <h4 className="alert-heading">Info</h4>
          <p>Some Info here</p>
          <hr />
          <p>Thanks for trying</p>
        </Fragment>
      );
      break;
    default:
      break;
  }

  //console.log("in alertPop");
  return (
    <div
      className={divStyle.join(" ")}
      style={alertStyle}
      role="alert"
      alert-dismissible="true"
    >
      <button
        type="button"
        className="float-right close"
        data-dismiss="alert"
        onClick={props.close}
      >
        &times;
      </button>
      {msg}
    </div>
  );
};

export default toasty;
