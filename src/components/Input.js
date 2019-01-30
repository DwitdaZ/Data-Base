import React, { Fragment } from "react";

const input = props => {
  const {
    inpType,
    inpName,
    inpValue,
    handleChange,
    classlist,
    defText
  } = props;

  return (
    <Fragment>
      <input
        type={inpType}
        name={inpName}
        value={inpValue}
        onChange={handleChange}
        className={classlist}
        placeholder={defText}
      >
        {}
      </input>
    </Fragment>
  );
};
export default input;
