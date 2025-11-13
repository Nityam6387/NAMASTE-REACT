import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";


class About extends React.Component {
    constructor(props){
        super(props);
        
        console.log("Parent Constructor");
    }
    

    componentDidMount(){
        console.log("Parent ComponentDidMount");
    }

    render(){
        console.log("Parent render");
        
        
        return (
            <div className="about-wrapper">
            <h1 className="heading"> Welcome to our app!!</h1>
            <div className="font=bold">
                loggedInUser:       
            <UserContext.Consumer>
            {({loggedInUser}) =>  <h4 className = "text-2xl font-bold"> {loggedInUser}  </h4>}
        </UserContext.Consumer>
            </div>
            <User  name ="Nityam Mishra (Function)" location = "Gorakhpur (Function)"/>
            <UserClass  name ="Nityam Mishra (Class)" location = "Gorakhpur (Class)"/>
            <UserClass  name ="Naman Mishra (Class)" location = "Gorakhpur (Class)"/>
            </div>
        )
    }
}


// const About = () => {
//     return (
//         <div className="about-wrapper">
//             <h1 className="heading"> Welcome to our app!!</h1>
//             <User  name ="Nityam Mishra (Function)" location = "Gorakhpur (Function)"/>
//             <UserClass  name ="Nityam Mishra (Class)" location = "Gorakhpur (Class)"/>
//         </div>
//     )
// };

export default About;