import './ProfileStyle.css'
function UserName(props) {
    return (
        <div>
            <div className="userNameOuterBorder"></div>
            <div className="userNameInnerBorder">{props.userName}</div>
        </div>
    );
}
export default UserName;
