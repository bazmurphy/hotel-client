import React from "react";

const UpdateBooking = () => {
    return (
        <div className="update-booking-container">
            <h2 className="update-booking-title">Update A Booking</h2>
            <form className="update-booking-form" action="/bookings/update" method="post">
                <label className="update-booking-label" for="id">ID:</label>
                <input className="update-booking-input" type="number" name="id" placeholder="ID" required/>
                <label className="update-booking-label" for="roomId">Room ID:</label>
                <input className="update-booking-input" type="number" name="roomId" placeholder="Room ID" required/>
                <label className="update-booking-label" for="title">Title:</label>
                <input className="update-booking-input" type="text" name="title" placeholder="Title" required/>
                <label className="update-booking-label" for="firstName">First Name:</label>
                <input className="update-booking-input" type="text" name="firstName" placeholder="First Name" required/>
                <label className="update-booking-label" for="surname">Surname:</label>
                <input className="update-booking-input" type="text" name="surname" placeholder="Surname" required/>
                <label className="update-booking-label" for="email">Email:</label>
                <input className="update-booking-input" type="text" name="email" placeholder="Email" required/>
                <label className="update-booking-label" for="checkInDate">Check In Date:</label>
                <input className="update-booking-input" type="date" name="checkInDate" required/>
                <label className="update-booking-label" for="checkOutDate">Check Out Date:</label>
                <input className="update-booking-input" type="date" name="checkOutDate" required/>
                <button className="update-booking-button" type="submit">Update Booking</button>
            </form>
        </div>
    );
}

export default UpdateBooking;