function handleClick()
{
    console.log("go to menu")
}
function GoToMenuButton() {
    return (
        <div onClick={handleClick}>
            <div style={{top:"745px", left:"792px", width:"340px",height:"54px", border:"3px solid", borderColor:"#e7810a",position:"absolute"}}></div>
            <div  style={{top:"730px",left:"806px", width:"311px",height:"56px",border:"1px solid",borderColor:"#585858", position:"absolute"}}>

                Go to Menu
            </div>
        </div>
    );
}
export default GoToMenuButton;
