import './RegisterPageStyle.css'
function handleClick(isEnabledPassword,isEnabledEmail,isEnabledPasswordConfirm)
{
    if(isEnabledPassword===true && isEnabledEmail===true && isEnabledPasswordConfirm===true) {
        console.log("Register account")
    }
    else
    {
        console.log("Don't register account")
    }

}
function RegisterButton(props)
{
    return(
        <div  onClick={()=>handleClick(props.isEnabledPassword,props.isEnabledEmail,props.isEnabledPasswordConfirm)}>
            <div className={"registerButtonOuterBorder"}></div>
            <div className={"registerButtonInnerBorder"}>
                Sign in
            </div>
        </div>)
}
export default RegisterButton