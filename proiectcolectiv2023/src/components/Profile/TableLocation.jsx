import './ProfileStyle.css'
function TableLocation(props) {
    return (
        <div>
            <div className="TableLocationOuterBorder"></div>
            <div className="TableLocationInnerBorder">{props.tableLocation}</div>
        </div>
    );
}
export default TableLocation;
