import React from "react";

const InputSubmit = ({
  callback,
  submit,
  type = "text",
  name = "",
  disabled = false,
  readOnly = false,
  placeholder = "",
  dialog = "",
  label = "",
}) => {
  return (
    <div className="input-group mb-3">
      {label === "" ? "" : <label>{label}</label>}
      <input
        type={type}
        name={name}
        disabled={disabled}
        class="form-control"
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={callback}
      />
      <div className="input-group-append">
        <button className="btn btn-primary" type="button" onClick={submit} >
          Add
        </button>
      </div>
      {dialog === "" ? (
        ""
      ) : (
        <small class="form-text text-primary">{dialog}</small>
      )}
    </div>
  );
};

export default InputSubmit;
