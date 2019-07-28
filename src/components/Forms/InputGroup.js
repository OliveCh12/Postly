import React from "react";

const InputGroup = ({
  callback,
  name = "",
  type = "text",
  disabled = false,
  readOnly = false,
  placeholder = ""
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        name={name}
        disabled={disabled}
        class="form-control form-control-sm"
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={({ target: { value } }) => callback(value)}
      />
      <small class="form-text text-muted">
        We'll never share your email with anyone else.
      </small>
    </div>
  );
};

export default InputGroup;
