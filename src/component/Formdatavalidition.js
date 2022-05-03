import React, { useState } from 'react'
import swal from 'sweetalert';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

export default function Formdatavalidition() {
    //statewise
    const value ={username:"",email:"",password:""};
    const[formvalue,setFormvalue]=useState(value);
    const[error,setError]=useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    //function state
    let handleChange = (e)=>{
        const {name,value}= e.target;
        setFormvalue({
            ...formvalue,
            [name]:value
        })

    }
    let handleSubmit = (e)=>{
        e.preventDefault();
        setError(validate(formvalue));
        setIsSubmit(true)


    }
    let validate =(value)=>{
        //console.log(value)
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!value.username){
            errors.username = "usename is requird"
        }
        if(!value.password){
            errors.password = "password is requird"
        }else if (value.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }else if(value.password.length < 6){
            errors.password = "Password cannot exceed 4 characters"
        }
        if(!value.email){
            errors.email = "email is requird"
        }else if(!regex.test(value.email)){
            errors.email = "This is not a valid email format   "
        }       
        return errors;
        
    }
    console.log(error)
    console.log( )


   // return satement
  return (
    <>
   

     <div>
         {
             Object.keys(error).length === 0 && isSubmit &&


            //  swal({
            //   title: "Good job!",
            //   text: "LOgin successfully!",
            //   icon: "success",
            //   button: "Close!",
            // })
            toast("Login successfully!")
         }
     </div>
     <form onSubmit={(e)=>{handleSubmit(e)}}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formvalue.username}
              onChange={handleChange}
            />
          </div>
          <p className="a_red">{error.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formvalue.email}
              onChange={handleChange}
            />
          </div>
          <p className="a_red">{error.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formvalue.password}
              onChange={handleChange}
            />
          </div>
          <p className="a_red">{error.password}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
        <ToastContainer />
      </form>
    </>
  )
}
