import { useState, useEffect } from "react";


const useRestaurantMenu = (id) => {
         
    const[resId,setResId] = useState(null);
    
    useEffect(() => {
          fetchInfo(); 
        
    },[]) 
         
    

    const fetchInfo = async () => {
         const data = await fetch("http://localhost:5000/api/restaurant/" + id);
         const json = await data.json();
         console.log("json data is ", json.data);
         
             setResId(json.data);
    }

    // console.log("level 1 " , json);
    console.log("menuu is",resId);

    return resId;
}

export default useRestaurantMenu;