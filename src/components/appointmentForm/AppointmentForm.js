import React from "react";
import { Form } from "react-router-dom";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <Form onSubmit={AppointmentForm}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <select
        name="contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      >
        <option value="" disabled>
          Select a contact
        </option>
        {contacts.map((contact, index) => (
          <option key={index} value={contact}>
            {contact}
          </option>
        ))}
      </select>
      <input
        type="date"
        name="date"
        value={date}
        min={getTodayString()}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        name="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button type="submit">Add Appointment</button>
    </Form>
  );
};
