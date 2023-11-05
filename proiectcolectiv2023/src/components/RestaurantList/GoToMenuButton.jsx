import './RestaurantListStyle.css'
function handleClick()
{
    console.log("go to menu")
}
function GoToMenuButton() {
    return (
        <div onClick={handleClick}>
            <div className="goToMenuButtonOuterBorder"></div>
            <div  className="goToMenuButtonInnerBorder">
                Go to Menu
            </div>
        </div>
    );
}
export default GoToMenuButton;
