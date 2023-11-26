import {Fragment, useEffect, useState} from "react";
import Navbar from "../Navbar";
import LoginButton from "./LoginButton";
import {ConfigProvider, Input} from "antd";
import './LoginPageStyle.css'

function LoginPage()
{
        const [email,setEmail] =useState("");
        const [password, setPassword] =useState("")
        const [emailValidity,setEmailValidity] = useState(false);
        const [passwordValidity,setPasswordValidity] = useState(false);
        const [emailTouched, setEmailTouched] = useState(false);
        const [passwordTouched, setPasswordTouched] = useState(false);

        const emailInput =
            {
                fontFamily:"Poppins",
                width:"330px",
                height:"50px",
                left:"610px",
                top:"260px",
                position:"absolute",
                borderRadius:0,
                borderColor:"#585858"

            }

            const passwordInput =
                {
                    fontFamily:'Poppins',
                    width:'330px',
                    height:'50px',
                    left:'597px',
                    top:'400px',
                    position:'absolute',
                    borderRadius:'0px',
                    borderColor:'#585858'
                }


    function handleEmailBar(event)
    {
        setEmail(event.currentTarget.value);
        setEmailTouched(true);
        validateEmail();
    }

    function handlePasswordBar(event)
    {

        setPassword(event.currentTarget.value);
        setPasswordTouched(true);
        validatePassword()
    }

    function validateEmail()
    {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailValidity(emailRegex.test(email));
    }

    function validatePassword()
    {
        if(password.length===0)
        {
            setPasswordValidity(false);
        }
        else
        {
            setPasswordValidity(true);
        }
    }

    return(
        <Fragment>
            <Navbar/>
            <LoginButton isEnabledEmail={emailValidity} isEnabledPassword={passwordValidity} ></LoginButton>

            <ConfigProvider
                theme={{
                    components: {
                        Input:{colorTextPlaceholder:'WHITE',colorBgContainer:'BLACK',colorText:'WHITE',colorPrimaryHover:'WHITE',colorBgTextActive:'#e7810a'}
                    },


                }}>
            <div className="emailTitleLogin">Email: </div>
            <div className="emailbarOuterBorder"></div>
            <Input   value={email} onBlur={validateEmail} onChange={handleEmailBar} style={emailInput}></Input>
            {emailTouched && emailValidity===false  && <div className="emailInputError">Invalid Email</div>}

            <div className="passwordTitle">Password:</div>
            <div className="passwordbarOuterBorder"></div>
            <Input value={password} onBlur={validatePassword} onChange={handlePasswordBar} type="password" style={passwordInput}></Input>
            {passwordTouched && passwordValidity===false  && <text className="passwordInputError">Invalid Password</text>}

             <div className="createAccountString">Create an account <a href="sign-up" id="hereString">here</a></div>
             <a className="changePasswordString" href='change-password' >Change password </a>

            </ConfigProvider>


        </Fragment>)
}
export default LoginPage