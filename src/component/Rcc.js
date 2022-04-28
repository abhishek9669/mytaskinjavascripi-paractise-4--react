import React, { Component } from 'react'

export default class Rcc extends Component {

    constructor(){
        super();
        this.state = {
            name: "Abhishek1"
        }
      }
      changName(){
        // alert('okokokokok')
          this.setState( {name:"ritik"});

      }
  render() {
    return (
        <div>
           <h1>{this.state.name}</h1>
           <button onClick={()=>{this.changName()}}>Rcc</button>
        </div>
        
    )
  }
}
