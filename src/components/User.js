import { useState } from "react";  

const User = (props) => {
    
    const[count,setCount] = useState(0);
    const[count2] = useState(1);

    const {name,location} = props;
    return (
        <div className="user-card">
        <h1>Count = {count} </h1>
        <button onClick = {() => {
        //    const countInc = count + 1;
           setCount(count+1);
        }}>Click to increment</button>
        <h1>Count2 = {count2} </h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Email: myemail@gmail.com</h4>
        </div>
    )
};

export default User;
