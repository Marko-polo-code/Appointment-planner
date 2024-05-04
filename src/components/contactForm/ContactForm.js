import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Contact Name"
          aria-label="Contact Name"
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          name="phone"
          value={phone}
          pattern="/^(?:(?:(?:00\s?|\+)\d{1,3}\s?)|(?:\(\+\d{1,3}\)\s?))(?:\d{1,4}[\s./-]?){3,14}(?:\d{1,4})$/"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Contact Phone"
          aria-label="Contact Phone"
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Contact Email"
          aria-label="Contact Email"
        />
      </label>
      <br />
      <input type="submit" value="Add Contact" aria-label="Add Contact"/>
    </form>
  );
};
