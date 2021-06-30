import React  from "react";
class User extends React.Component{
    render(){
        return(
            <div>
            <h1>Hello : {this.props.uname}</h1>
            <h2>Age : {this.props.age}</h2>
            </div>
        );
    }

}
export default User