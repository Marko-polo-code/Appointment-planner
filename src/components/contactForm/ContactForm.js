import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  isDuplicate,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Contact Name"
      />
      {isDuplicate && <span style={{ color: 'red' }}>Name is duplicate</span>}
      <br />
      <input
        type="text"
        name="phone"
        value={phone}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Contact Phone"
      />
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Contact Email"
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};
