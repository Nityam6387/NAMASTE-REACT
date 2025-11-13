import { useState, useEffect } from "react";


const useRestaurantMenu = (id) => {
         
    const[resId,setResId] = useState(null);
    
    useEffect(() => {
          fetchInfo(); 
        
    },[]) 
         
    

    const fetchInfo = async () => {
         const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.83730&lng=80.91650&restaurantId=${restaurantId}&catalog_qa=undefined`);
         const json = await data.json();
         console.log("json data is ", json.data);
         
             setResId(json.data);
    }

    // console.log("level 1 " , json);
    console.log("menuu is",resId);

    return resId;
}

export default useRestaurantMenu;