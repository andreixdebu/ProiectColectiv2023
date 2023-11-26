import './LoginPageStyle.css'
function handleClick(isEnabledPassword,isEnabledEmail)
{
    if(isEnabledPassword===true && isEnabledEmail===true) {
        console.log("Login to acc")
    }
    else
    {
        console.log("Don't login to acc")
    }

}
function LoginButton(props)
{
    return(
    <div  onClick={()=>handleClick(props.isEnabledPassword,props.isEnabledEmail)}>
        <div className={"loginButtonOuterBorder"}></div>
        <div className={"loginButtonInnerBorder"}>
            Log in
        </div>
    </div>)
}
export default LoginButton