import './ProfileStyle.css'
function ReservationDate(props) {
    return (
        <div>
            <div className="reservationDateOuterBorder"></div>
            <div className="reservationDateInnerBorder">{props.reservationDate}</div>
        </div>
    );
}
export default ReservationDate;
