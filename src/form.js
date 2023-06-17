import React, { useState } from 'react'
// import App from 'App.css'



const Form = ()=> {
    let[name, setName] = useState("")
    let[email, setEmail] = useState("")
    let[password, setPassword] = useState("")
    let[confirmPassword, setConfirmPassword] = useState("")
    let[error, setError] = useState("");
    let[success, setSuccess] = useState("");

    function handler(e){
        e.preventDefault();
        if(!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()){
            setError("All fields are required!")
            setSuccess("")
            return; 
        }
        else if(password !== confirmPassword){
            setError("Password not match!")
            setSuccess("")
            return;
        }
        else{
            setSuccess("signup successfully")
            setError("")
            return;
        }
    }
    
    
    return(
        <>

            <h1>SignUp Page</h1>
            <form id='form'>
                <label>Nmae : </label>
                <input id="name" className='input' type='text'
                onChange={(e) => {setName(e.target.value)}}/><hr/><br/><br/>
                
                
                <label>Email : </label>
                <input id="email" className='input' type='email' 
                onChange={(e) => {setEmail(e.target.value)}}/><hr/><br/><br/>
                

                <label>Password : </label>
                <input type='password' className='input' id="pass" 
                onChange={(e) => {setPassword(e.target.value)}}/><hr/><br/><br/>
                

                <label>Confirm Password : </label>
                <input type='password' className='input' id="cpass" 
                onChange={(e) => {setConfirmPassword(e.target.value)}}/><hr/><br/><br/>
               

                <button id='btn' type='submit' 
                onClick={handler}>submit</button>
            </form>
       
            {
                error &&(
                    <p id='error'>{error}</p>
                )
                
            }
            {
               success &&(
                <p id="success">{success}</p>
               )
               
            }
        </>
    )
}

export default Form;