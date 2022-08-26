import React from "react";

const DeleteBooking = () => {
    return (
        <div className="delete-booking-container">
            <h2 className="delete-booking-title">Delete A Booking</h2>
            <form className="delete-booking-form" action="/bookings/delete" method="post">
                <label className="delete-booking-label" for="id">ID:</label>
                <input className="delete-booking-input" type="number" name="id" placeholder="ID" required/>
                <button className="delete-booking-button" type="submit">Delete Booking</button>
            </form>
        </div>
    );
}

export default DeleteBooking;