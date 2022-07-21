import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "./styles/book.css"

const Book = () => {
  return (
    <div className="book">
      <div className="left-side">
        <h2>Appointment Type:</h2>
        <p>o Instrument Demo</p>
        <p>o Repair/Cleaning</p>
        <p>o Other</p>
      </div>
      <div className="right-side">
        <div className="left-of-right-side">
          <div className="calendar">
            <Calendar />
          </div>
          <Link to="/BookConf">
            <button className="book-now">
              <h3>Book Now</h3>
            </button>
          </Link>
        </div>
        <div className="times-col">
          <div>
            Time Slot 1
          </div>
          <div>
            Time Slot 2
          </div>
          <div>
            Time Slot 3
          </div>
          <div>
            Time Slot 4
          </div>
          <div>
            Time Slot 5
          </div>
          <div>
            Time Slot 6
          </div>
          <div>
            Time Slot 7
          </div>
          <div>
            Time Slot 8
          </div>
          <div>
            Time Slot 9
          </div>
          <div>
            Time Slot 10
          </div>
          <div>
            Time Slot 11
          </div>
          <div>
            Time Slot 12
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
