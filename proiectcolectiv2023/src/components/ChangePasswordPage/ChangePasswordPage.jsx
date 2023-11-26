import {Fragment, useEffect, useState} from "react";
import Navbar from "../Navbar";
import ChangePasswordButton from "./ChangePasswordButton";
import {ConfigProvider, Input} from "antd";
import './ChangePasswordPage.css'

function ChangePasswordPage()
    {

        const [email,setEmail] =useState("");
        const [password,setPassword]=useState("");
        const [confirmPassword,setConfirmPassword] = useState("");
        const [emailValidity,setEmailValidity] = useState(false);
        const [passwordValidity, setPasswordValidity]=useState(false);
        const [confirmPasswordValidity, setConfirmPasswordValidity] = useState(false);
        const [emailTouched,setEmailTouched] = useState(false);
        const [passwordTouched,setPasswordTouched] = useState(false);
        const [confirmPasswordTouched,setConfirmPasswordTouched] = useState(false);


        useEffect(() => {
            validateEmail();
            validatePassword();
            validateConfirmPassword();
        }, [email, password, confirmPassword]);

        const emailInput =
            {
                fontFamily:"Poppins",
                width:"330px",
                height:"50px",
                left:"610px",
                top:"280px",
                position:"absolute",
                borderRadius:0,
                borderColor:"#585858"

            }

        const passwordInput =
            {
                fontFamily:"Poppins",
                width:"330px",
                height:"50px",
                left:"597px",
                top:"415px",
                position:"absolute",
                borderRadius:0,
                borderColor:"#585858"

            }

        const confirmPasswordInput =
            {
                fontFamily:"Poppins",
                width:"330px",
                height:"50px",
                left:"610px",
                top:"550px",
                position:"absolute",
                borderRadius:0,
                borderColor:"#585858"

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
            validatePassword();
            validateConfirmPassword()

        }

        function handleConfirmPasswordBar(event)
        {
            setConfirmPassword(event.currentTarget.value);
            setConfirmPasswordTouched(true);
            validatePassword()
            validateConfirmPassword();

        }

        function validateEmail()
        {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setEmailValidity(emailRegex.test(email));
        }


        function validatePassword()
        {
            if(password.length===0||password!==confirmPassword)
            {
                setPasswordValidity(false);
            }
            else
            {
                setPasswordValidity(true);
            }
        }

        function validateConfirmPassword()
        {
            if(confirmPassword.length===0||password!==confirmPassword)
            {
                setConfirmPasswordValidity(false);
            }
            else
            {
                setConfirmPasswordValidity(true);
            }
        }







        return(
            <Fragment>
                <Navbar/>
                <ChangePasswordButton isEnabledEmail={emailValidity} isEnabledPassword={passwordValidity} isEnabledPasswordConfirm={confirmPasswordValidity}></ChangePasswordButton>
                <ConfigProvider
                    theme={{
                        components: {
                            Input:{colorTextPlaceholder:'WHITE',colorBgContainer:'BLACK',colorText:'WHITE',colorPrimaryHover:'WHITE',colorBgTextActive:'#e7810a'}
                        },


                    }}>

                <div className="emailTitleChangePassword">Email:</div>
                <div className="emailBarOuterBorder"></div>
                <Input value={email} onBlur={validateEmail} onChange={handleEmailBar} style={emailInput}></Input>
                {emailTouched && emailValidity===false && <div className="emailError">Invalid Email</div>}

                <div className="newPasswordTitle">New Password:</div>
                <div className="passwordBarOuterBorder"></div>
                <Input value={password} onBlur={validatePassword} onChange={handlePasswordBar} type="password" style={passwordInput}></Input>
                {(passwordTouched||confirmPasswordTouched) && passwordValidity===false &&<div className="passwordError">Invalid password or passwords don't match</div>}

                <div className="confirmPasswordTitle">Confirm Password:</div>
                <div className="confirmPasswordBarOuterBorder"></div>
                <Input value={confirmPassword} onBlur={validateConfirmPassword} onChange={handleConfirmPasswordBar} type="password" style={confirmPasswordInput}></Input>
                </ConfigProvider>


            </Fragment>
        )

    }
    export default ChangePasswordPage