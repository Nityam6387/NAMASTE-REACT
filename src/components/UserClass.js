import React from "react";

 class UserClass extends React.Component {
    constructor(props){
     super(props);
     
     this.state = {
        count: 0,
        count2: 1,  
     };

     console.log(this.props.name + "Child Constructor");
    }

    componentDidMount(){
        console.log(this.props.name +"Child ComponentDidMount");
    }

    render() {

        console.log(this.props.name +"Child Render");
        const {name,location} = this.props;
        return (
              <div className="user-card">
              <h1> Count: {this.state.count}</h1>
              <button onClick = {() => {
                this.setState({
                    count : this.state.count + 1
                })
              }}>Click to increment</button>
              <h1> Count2: {this.state.count2}</h1>
              <h2>Name: {name}</h2>
              <h3>Location: {location}</h3>
              <h4>Email: myemail@gmail.com</h4>
               </div>
        )
    }
};

export default UserClass;