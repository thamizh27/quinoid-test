import React, { useState } from "react";

const Form = ({ submitedValue }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [region, setRegion] = useState("asia");
  const [checkbox, setCheckbox] = useState(false);

  const ageCal = (birthDate) => {
    let TODAY = new Date(Date.now());
    let EIGHTEEN_YEARS_BACK = new Date(
      new Date(TODAY).getDate() +
        "/" +
        new Date(TODAY).getMonth() +
        "/" +
        (new Date(TODAY).getFullYear() - 18)
    );
    let USER_INPUT = new Date(birthDate);
    // Validate Now
    let result = EIGHTEEN_YEARS_BACK > USER_INPUT; // true if over 18, false if less than 18
    return result;
  };

  const handleChangeFullName = (e) => {
    setFullName(
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
    );
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeDateOfBirth = (e) => {
    setDateOfBirth(e.target.value);
  };

  const handleChangeSelect = (e) => {
    setRegion(e.target.value);
  };

  const handleChangeCheckbox = (e) => {
    setCheckbox(e.target.checked);
  };

  const age = ageCal(dateOfBirth);

  const handleSubmit = (e) => {
    e.preventDefault();

    submitedValue(region);

    setFullName("");
    setEmail("");
    setDateOfBirth("");
  };
  return (
    <div className="form">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="sub">
          <label>Full Name :</label>
          <input
            autoFocus
            value={fullName}
            type="text"
            placeholder="Full Name"
            onChange={handleChangeFullName}
            name="fullName"
            required
          />
        </div>
        <div className="sub">
          <label>Email :</label>
          <input
            value={email}
            type="email"
            placeholder="example@gmail.com"
            onChange={handleChangeEmail}
            name="email"
            required
          />
        </div>
        <div className="sub">
          <label>DOB :</label>
          <input
            value={dateOfBirth}
            type="date"
            onChange={handleChangeDateOfBirth}
            name="date of birth"
            required
          />
        </div>
        {!age && (
          <span style={{ marginBottom: "1rem" }}>
            Age should must be 18 and above
          </span>
        )}
        <div className="sub">
          <label htmlFor="region">Region:</label>
          <select
            value={region}
            onChange={handleChangeSelect}
            id="region"
            name="region"
          >
            <option>Choose a region</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        <div>
          <label htmlFor="">
            <input
              id=""
              type="checkbox"
              onChange={handleChangeCheckbox}
              value={checkbox}
            />{" "}
            I agree to Terms and Conditions
          </label>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Form;
