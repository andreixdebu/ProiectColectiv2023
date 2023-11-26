import './ChangePasswordPage.css'
function handleClick(isEnabledPassword,isEnabledEmail,isEnabledPasswordConfirm)
{
    if(isEnabledPassword===true && isEnabledEmail===true && isEnabledPasswordConfirm===true) {
        console.log("Change password to acc")
    }
    else
    {
        console.log("Don't change password to acc")
    }

}
function ChangePasswordButton(props)
{
    return(
        <div  onClick={()=>handleClick(props.isEnabledPassword,props.isEnabledEmail,props.isEnabledPasswordConfirm)}>
            <div className={"changePasswordButtonOuterBorder"}></div>
            <div className={"changePasswordButtonInnerBorder"}>
                Change Password
            </div>
        </div>)
}
export default ChangePasswordButton