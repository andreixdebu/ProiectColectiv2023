import React from 'react';
import './ProfileStyle.css';

function ReservationsList(props) {
  function handleReservationItemClick(item) {
    props.onItemSelected(item);
  }

  return (
    <div>
      <div className="reservationListOuterBorder"></div>
      <div className="reservationListInnerBorder">
        <ul>
          {props.list.map((reservation) => (
            <li
              key={reservation.name}  
              className="reservationListItems"
              onClick={() => handleReservationItemClick(reservation)}
            >
              {reservation.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ReservationsList;
