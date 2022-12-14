import React from "react";

const UpdateBooking = props => {
  const [id, setId] = React.useState("");
  const [roomId, setRoomId] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [checkInDate, setCheckInDate] = React.useState("");
  const [checkOutDate, setCheckOutDate] = React.useState("");

  const [message, setMessage] = React.useState("");

  const handleSubmit = event => {
    // console.log(event);
    event.preventDefault();

    fetch(`https://cyf-bazmurphy-hotel-server.glitch.me/bookings/update`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // if (state value !== "")
        //     then send the key/value

        id: id,
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
        console.log(res);
        if (res.status === 200) {
          setId("");
          setRoomId("");
          setTitle("");
          setFirstName("");
          setSurname("");
          setEmail("");
          setCheckInDate("");
          setCheckOutDate("");
          props.refetchBookings();
        }
        setMessage(res.body.message);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="update-booking-container">
      <h2 className="update-booking-title">Update A Booking</h2>
      <form className="update-booking-form" onSubmit={handleSubmit}>
        <label className="update-booking-label" htmlFor="id">
          ID:
        </label>
        <input
          className="update-booking-input"
          type="number"
          name="id"
          placeholder="ID"
          required
          onChange={event => setId(event.target.value)}
        />
        <label className="update-booking-label" htmlFor="roomId">
          Room ID:
        </label>
        <input
          className="update-booking-input"
          type="number"
          name="roomId"
          placeholder="Room ID"
          onChange={event => setRoomId(event.target.value)}
        />
        <label className="update-booking-label" htmlFor="title">
          Title:
        </label>
        <input
          className="update-booking-input"
          type="text"
          name="title"
          placeholder="Title"
          onChange={event => setTitle(event.target.value)}
        />
        <label className="update-booking-label" htmlFor="firstName">
          First Name:
        </label>
        <input
          className="update-booking-input"
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={event => setFirstName(event.target.value)}
        />
        <label className="update-booking-label" htmlFor="surname">
          Surname:
        </label>
        <input
          className="update-booking-input"
          type="text"
          name="surname"
          placeholder="Surname"
          onChange={event => setSurname(event.target.value)}
        />
        <label className="update-booking-label" htmlFor="email">
          Email:
        </label>
        <input
          className="update-booking-input"
          type="text"
          name="email"
          placeholder="Email"
          onChange={event => setEmail(event.target.value)}
        />
        <label className="update-booking-label" htmlFor="checkInDate">
          Check In Date:
        </label>
        <input
          className="update-booking-input"
          type="date"
          name="checkInDate"
          onChange={event => setCheckInDate(event.target.value)}
        />
        <label className="update-booking-label" htmlFor="checkOutDate">
          Check Out Date:
        </label>
        <input
          className="update-booking-input"
          type="date"
          name="checkOutDate"
          onChange={event => setCheckOutDate(event.target.value)}
        />
        <button className="update-booking-button" type="submit">
          Update Booking
        </button>
      </form>
      {message && <p className="update-booking-message">{message}</p>}
    </div>
  );
};

export default UpdateBooking;
