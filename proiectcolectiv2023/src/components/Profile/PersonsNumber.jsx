import './ProfileStyle.css'
function PersonsNumber(props) {
    return (
        <div>
            <div className="personsNumberOuterBorder"></div>
            <div className="personsNumberInnerBorder">{props.personNumber}</div>
        </div>
    );
}
export default PersonsNumber;
