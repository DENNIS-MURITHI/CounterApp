import React from 'react'

class App extends React.Component{
  //begin of the constructor
  constructor(props){
    super(props)
    this.state={
      message:"Counter-0"
    }
  }
  //end of the constructor

  //define our methods
    reset(){
      this.setState({
        message:"Counter-0"
      })
    }
    increment(){
      this.setState({
        message:"Counter-5"
      })}
    decrement(){
      this.setState({
        message:"Counter-0"
      })
    }
    //end of the methods

    //our heading, trigger our methods using buttons
render(){
  return(
    <div className='main-conatiner'>
      <h1>Simple counter App</h1>
      <div className='counter-container'>
      <h2>{this.state.message}</h2>
      </div>
      <div className='buttons-main'>
      <div className='buttons'><button onClick={()=>this.reset()}>Reset</button></div>
      <div className='buttons'><button onClick={()=>this.increment()}>Increment</button></div>
      <div className='buttons'><button onClick={()=>this.decrement()}>Decrement</button></div>
      </div>
    </div>
  )
}
}  
  
export default App