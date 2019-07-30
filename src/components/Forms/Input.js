import React from "react";

const Input = ({
  callback,
  type = "text",
  name = "",
  disabled = false,
  readOnly = false,
  placeholder = "",
  label = "",
  submit = false
}) => {
  return (
      <input
        type={type}
        name={name}
        disabled={disabled}
        className="form-control"
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={callback} />
  );
};

export default Input;
