import React from "react";

const AddBooking = props => {
  const [roomId, setRoomId] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [checkInDate, setCheckInDate] = React.useState("");
  const [checkOutDate, setCheckOutDate] = React.useState("");

  const handleSubmit = event => {
    // console.log(event);
    event.preventDefault();

    fetch(`https://cyf-bazmurphy-hotel.glitch.me/bookings/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roomId: roomId,
        title: title,
        firstName: firstName,
        surname: surname,
        email: email,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate
      })
    })
      .then(res => {
        if (res.status === 200) {
          setRoomId("");
          setTitle("");
          setFirstName("");
          setSurname("");
          setEmail("");
          setCheckInDate("");
          setCheckOutDate("");
          props.refetchBookings();
        }
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="add-booking-container">
      <h2 className="add-booking-title">Add A Booking</h2>
      <form className="add-booking-form" onSubmit={handleSubmit}>
        <label className="add-booking-label" htmlFor="roomId">
          Room ID:
        </label>
        <input
          className="add-booking-input"
          type="number"
          name="roomId"
          placeholder="Room ID"
          required
          onChange={event => setRoomId(event.target.value)}
        />
        <label className="add-booking-label" htmlFor="title">
          Title:
        </label>
        <input
          className="add-booking-input"
          type="text"
          name="title"
          placeholder="Title"
          required
          onChange={event => setTitle(event.target.value)}
        />
        <label className="add-booking-label" htmlFor="firstName">
          First Name:
        </label>
        <input
          className="add-booking-input"
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          onChange={event => setFirstName(event.target.value)}
        />
        <label className="add-booking-label" htmlFor="surname">
          Surname:
        </label>
        <input
          className="add-booking-input"
          type="text"
          name="surname"
          placeholder="Surname"
          required
          onChange={event => setSurname(event.target.value)}
        />
        <label className="add-booking-label" htmlFor="email">
          Email:
        </label>
        <input
          className="add-booking-input"
          type="text"
          name="email"
          placeholder="Email"
          required
          onChange={event => setEmail(event.target.value)}
        />
        <label className="add-booking-label" htmlFor="checkInDate">
          Check In Date:
        </label>
        <input
          className="add-booking-input"
          type="date"
          name="checkInDate"
          required
          onChange={event => setCheckInDate(event.target.value)}
        />
        <label className="add-booking-label" htmlFor="checkOutDate">
          Check Out Date:
        </label>
        <input
          className="add-booking-input"
          type="date"
          name="checkOutDate"
          required
          onChange={event => setCheckOutDate(event.target.value)}
        />
        <button className="add-booking-button" type="submit">
          Add Booking
        </button>
      </form>
    </div>
  );
};

export default AddBooking;

// TO DO LATER => Combine all states into a single Object:

// const [formData, setFormData] = React.useState({
//     roomId: "",
//     title: "",
//     firstName: "",
//     surname: "",
//     email: "",
//     checkInDate: "",
//     checkOutDate: "",
// });
