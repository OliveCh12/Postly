import React from "react";

const Input = ({
  callback,
  type = "text",
  name = "",
  disabled = false,
  readOnly = false,
  placeholder = "",
  dialog = "",
  label = "",
  submit = false
}) => {
  return (
    <div className="form-group">
      {label === "" ? "" : <label>{label}</label>}
      <input
        type={type}
        name={name}
        disabled={disabled}
        class="form-control"
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={callback}
        // onChange={({ target: { value } }) => callback(value)}
      />
      {dialog === "" ? (
        ""
      ) : (
        <small class="form-text text-primary">{dialog}</small>
      )}
    </div>
  );
};

export default Input;
