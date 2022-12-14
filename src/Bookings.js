import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults";
import CustomerProfile from "./CustomerProfile.js";
// import FakeBookings from "./data/fakeBookings.json";
import AddBooking from "./AddBooking.js";
import UpdateBooking from "./UpdateBooking.js";
import DeleteBooking from "./DeleteBooking.js";

const Bookings = () => {
  const [bookings, setBookings] = React.useState([]);
  // ^store the API data in an Array

  const [customerId, setCustomerId] = React.useState(null);
  // ^create state here so that SearchResultSingular button can use it... 2 levels deeper

  const [isLoading, setIsLoading] = React.useState(true);

  const [errorOccurred, setErrorOccurred] = React.useState({
    ok: true,
    status: "",
    statusText: ""
  });

  const [refetchBookingsIndex, setRefetchBookingsIndex] = React.useState(0);

  const refetchBookings = () => {
    setRefetchBookingsIndex(i => i + 1);
  };

  React.useEffect(() => {
      // fetch(`http://localhost:3001/bookings`)
      fetch(`https://cyf-bazmurphy-hotel-server.glitch.me/bookings`)
      .then(res => {
        // console.log(res)
        if (!res.ok) {
          // console.log(res.status)
          setErrorOccurred({
            ok: res.ok,
            status: res.status,
            statusText: res.statusText
          });
          // throw new Error(res);
        } else {
          return res.json();
        }
      })
      .then(data => {
        setBookings(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        // an error is only a string type
      });
  }, [refetchBookingsIndex]);

  const search = searchVal => {
    // console.log(`search function ran with searchVal: ${searchVal}`);
    const filterBookings = bookings.filter(element => {
      return (
        element.firstName.toLowerCase().startsWith(searchVal.toLowerCase()) ||
        element.surname.toLowerCase().startsWith(searchVal.toLowerCase())
      );
    });
    // console.log(filterBookings)
    setBookings(filterBookings);
  };

  // console.log(bookings);

  return (
    <div className="bookings-container">
      <Search search={search} />
      {errorOccurred.ok === false ? (
        <div className="search-results-error-container">
          <img
            className="search-results-error-image"
            src="../images/error.png"
            alt="loading icon"
          />
          <span className="search-results-error-text">
            An Error occured when fetching the Bookings Data :
            {errorOccurred.status} {errorOccurred.statusText}
          </span>
        </div>
      ) : isLoading === true ? (
        <div className="search-results-loading-container">
          <img
            className="search-results-loading-image"
            src="../images/loading.gif"
            alt="loading icon"
          />
          <span className="search-results-loading-text">
            The Bookings data is loading, please wait...
          </span>
        </div>
      ) : (
        <SearchResults results={bookings} setCustomerId={setCustomerId} />
      )}
      {customerId && <CustomerProfile id={customerId} />}
      <div className="crud-container">
        <AddBooking refetchBookings={refetchBookings} />
        <UpdateBooking refetchBookings={refetchBookings} />
        <DeleteBooking refetchBookings={refetchBookings} />
      </div>
    </div>
  );
};

export default Bookings;
