import React, { useState } from "react";

import Cleave from 'cleave.js/react';

const Forms = () => {
  const [state, setState] = useState();

  function handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setState({
      [name]: value
    });

    console.log(state);
  }
  return (
    <form>
  <Cleave placeholder="Enter your credit card number" className="form-control"/>
      <h5 className="text-primary mb-3">Informations</h5>
      <div className="form-group">
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              name="firstname"
              className="form-control"
              placeholder="First name"
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="lastname"
              className="form-control"
              placeholder="Last name"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <input
          type="text"
          name="situation"
          class="form-control"
          placeholder="Current Situation"
          onChange={handleInputChange}
        />
      </div>
      <hr />
      <div class="form-group">
        <input
          type="text"
          name="adress"
          class="form-control"
          placeholder="Adress"
          onChange={handleInputChange}
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          name="phone"
          class="form-control input-phone"
          placeholder="Phone number"
          onChange={handleInputChange}
        />
      </div>
      <div class="form-group">
        <input
          type="email"
          name="email"
          class="form-control"
          placeholder="E-Mail"
          onChange={handleInputChange}
        />
      </div>
      <div class="form-group">
        <div className="input-group mb-3">
          <input
            type="text"
            name="langage"
            class="form-control"
            placeholder="Langage"
            onChange={handleInputChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon2"
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <h5 className="text-primary mb-3">Profesionnal</h5>
      <div class="form-group">
        <input
          type="text"
          name="company"
          class="form-control form-control-sm"
          placeholder="Company"
          onChange={handleInputChange}
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          name="job_title"
          class="form-control form-control-sm"
          placeholder="Job Title"
          onChange={handleInputChange}
        />
      </div>
      <div class="form-group">
        <textarea
          type="text"
          name="job_description"
          class="form-control form-control-sm"
          placeholder="Description"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <div class="form-row">
          <div className="col-md-6">
            <input
              type="date"
              name="job_date"
              class="form-control form-control-sm"
              placeholder="Date"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <input
              type="date"
              name="job_date"
              class="form-control form-control-sm"
              placeholder="Date"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-primary btn-sm btn-block">
        Add
      </button>
      <br />
      <h5 className="text-primary mb-3">Formations</h5>
      <div class="form-group">
        <input
          type="text"
          name="school"
          class="form-control form-control-sm"
          placeholder="School"
          onChange={handleInputChange}
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          name="graduation"
          class="form-control form-control-sm"
          placeholder="Graduation"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <div class="form-row">
          <div className="col-md-6">
            <input
              type="date"
              name="job_date"
              class="form-control form-control-sm"
              placeholder="Date"
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <input
              type="date"
              name="job_date"
              class="form-control form-control-sm"
              placeholder="Date"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-primary btn-sm btn-block">
        Add
      </button>
      <br />
      <h5 className="text-primary mb-3">Skills</h5>
      <br />
      <h5 className="text-primary mb-3">Links</h5>
    </form>
  );
};

export default Forms;
