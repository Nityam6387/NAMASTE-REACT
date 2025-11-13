import { useState, useEffect } from "react";


const useRestaurantMenu = (id) => {
         
    const[resId,setResId] = useState(null);
    
    useEffect(() => {
          fetchInfo(); 
        
    },[]) 
         
    

    const fetchInfo = async () => {
         const data = await fetch(`https://foodapp-backend-es5d.onrender.com/api/restaurant/${id}`);
         const json = await data.json();
         console.log("json data is ", json.data);
         
             setResId(json.data);
    }

    // console.log("level 1 " , json);
    console.log("menuu is",resId);

    return resId;
}

export default useRestaurantMenu;