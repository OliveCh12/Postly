import React, { useState } from "react";
import Input from "../Forms/Input";
import InputSubmit from "../Forms/InputSubmit";

const UserInfos = props => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    birth: "",
    situation: "",
    adress: "",
    phone: "",
    email: "",
    language: [],
    career: [],
    education: [],
    skills: [],
    created_at: new Date()
  });


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
      <Input
        type="text"
        name="firstname"
        placeholder="First Name"
        callback={handleInputChange}
      />
      <Input
        type="text"
        name="lastname"
        placeholder="Last Name"
        callback={handleInputChange}
      />
      <Input
        type="text"
        name="situation"
        placeholder="Current Situation"
        callback={handleInputChange}
      />
      <Input
        type="date"
        name="birth"
        placeholder="Date of Birth"
        callback={handleInputChange}
      />
      <Input
        type="text"
        name="adress"
        placeholder="Full Adress"
        callback={handleInputChange}
      />
      <Input
        type="text"
        name="phone"
        placeholder="Phone Number"
        callback={handleInputChange}
      />
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
