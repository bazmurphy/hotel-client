import React from "react";

const DeleteBooking = props => {
  const [id, setId] = React.useState("");

  const [message, setMessage] = React.useState("");

  const handleSubmit = event => {
    // console.log(event);
    event.preventDefault();

    fetch(`https://cyf-bazmurphy-hotel.glitch.me/bookings/delete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id
      })
    })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          setId("");
          props.refetchBookings();
        }
        setMessage(JSON.parse(res.body.message));
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="delete-booking-container">
      <h2 className="delete-booking-title">Delete A Booking</h2>
      <form className="delete-booking-form" onSubmit={handleSubmit}>
        <label className="delete-booking-label" htmlFor="id">
          ID:
        </label>
        <input
          className="delete-booking-input"
          type="number"
          name="id"
          placeholder="ID"
          required
          onChange={event => setId(event.target.value)}
        />
        <button className="delete-booking-button" type="submit">
          Delete Booking
        </button>
      </form>
      {message && <p className="delete-booking-message">{message}</p>}
    </div>
  );
};

export default DeleteBooking;
