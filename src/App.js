import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //state/hooks
  const[datah,setData] =useState('')


  //function to
  let data1 ={
    "data":{
      Name:datah
    }
   
  }
  let myFunction =()=>{
   
    //alert('Please enter')
    fetch('http://localhost:1337/api/friends',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json' 
      },
      body: JSON.stringify(data1)

    }).then((response)=>{
      return response.json();
    }).then((res)=>{
      console.log(res) 

    }).catch((err)=>{
      console.log(err);
    })
  }


  //return statment
  return (
    <>
     <form>
          <label>Enter Student Name <br/>
            <input type="text" value={ datah } onChange={ (e)=>{ setData(e.target.value) }} />
          </label><br/>
          <input type="button" onClick={ myFunction } name="studentName" value="Save Student" />
      </form>

        
    </>
  );
}

export default App;
