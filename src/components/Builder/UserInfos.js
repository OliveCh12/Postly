import React, { useState, useContext } from "react";

import { UserContext } from "./UserContext";

// Import Components
import Input from "../Forms/Input";
import InputSubmit from "../Forms/InputSubmit";

const UserInfos = ({ callback }) => {
  const [state, setState] = useContext(UserContext);

  function handleInputChange(event) {
    event.preventDefault();
    const form = { ...state };
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const fieldname = event.target.name;

    if (Array.isArray(form[fieldname])) {
      form[fieldname] = [value];
      console.log(form[fieldname]);
      handleInputSubmitChange(value);
      setState(form);
    } else {
      form[fieldname] = value;
      setState(form);
    }
  }

  function handleInputSubmitChange(event) {
    const form = { ...state };
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
  }

  return (
    <form>
      <div className="form-group">
        <div className="form-row">
          <div className="col">
            <Input
              type="text"
              name="firstname"
              placeholder="First Name"
              callback={handleInputChange}
            />
          </div>
          <div className="col">
            <Input
              type="text"
              name="lastname"
              placeholder="Last Name"
              callback={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <Input
          type="text"
          name="situation"
          placeholder="Current Situation"
          callback={handleInputChange}
        />
      </div>
      <div className="form-group">
        <Input
          type="date"
          name="birth"
          placeholder="Date of Birth"
          callback={handleInputChange}
        />
      </div>
      <div className="form-group">
        <Input
          type="text"
          name="adress"
          placeholder="Full Adress"
          callback={handleInputChange}
        />
      </div>
      <div className="form-group">
        <Input
          type="text"
          name="phone"
          placeholder="Phone Number"
          callback={handleInputChange}
        />
      </div>
      <InputSubmit
        type="text"
        name="language"
        placeholder="Language"
        callback={handleInputChange}
        submit={handleInputSubmitChange}
      />
    </form>
  );
};

export default UserInfos;
