import React from "react";

// const navigate = useNavigate();

const handleSubmit = (event) => {
    console.log(event)
    event.preventDefault();
}

const AddBooking = () => {
    return (
        <div className="add-booking-container">
            <h2 className="add-booking-title">Add A Booking</h2>
            <form className="add-booking-form" action="/bookings/add" method="post">
                <label className="add-booking-label" for="roomId">Room ID:</label>
                <input className="add-booking-input" type="number" name="roomId" placeholder="Room ID" required/>
                <label className="add-booking-label" for="title">Title:</label>
                <input className="add-booking-input" type="text" name="title" placeholder="Title" required/>
                <label className="add-booking-label" for="firstName">First Name:</label>
                <input className="add-booking-input" type="text" name="firstName" placeholder="First Name" required/>
                <label className="add-booking-label" for="surname">Surname:</label>
                <input className="add-booking-input" type="text" name="surname" placeholder="Surname" required/>
                <label className="add-booking-label" for="email">Email:</label>
                <input className="add-booking-input" type="text" name="email" placeholder="Email" required/>
                <label className="add-booking-label" for="checkInDate">Check In Date:</label>
                <input className="add-booking-input" type="date" name="checkInDate" required/>
                <label className="add-booking-label" for="checkOutDate">Check Out Date:</label>
                <input className="add-booking-input" type="date" name="checkOutDate" required/>
                <button className="add-booking-button" type="submit" onSubmit={handleSubmit}>Add Booking</button>
            </form>
        </div>
    );
}

export default AddBooking;