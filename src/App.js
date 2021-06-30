import React from "react";
import { connect } from "react-redux";
import User from "./User";
class App extends React.Component {
  render(){
    return (
      <div>
        <User uname={this.props.user.name} age={this.props.user.age} />
        <button onClick={()=>this.props.setName("Shadow Dow!!!")}>Change Name</button>
        <button onClick={()=>this.props.setAge(28)}>Change Name</button>
      </div>
    );
 }
}


//Redux store reducer state  to  props
const mapStatetoProps=(state)=>{
  return {
    user:state.user,
    sala: state.sala
  }
}

//Redux store dispatch  to props
const mapDispatchtoProps=(dispatch)=>{
  return {
    setName:(name)=>{
      dispatch({
        type:"setName",
        payload: name
      })
    },
    setAge:(age)=>{
      dispatch({
        type:"setAge",
        payload: age
      })
    }
  }
}
              // React-Redux  connect  Redux  to React Component
export default connect(mapStatetoProps,mapDispatchtoProps)(App);
