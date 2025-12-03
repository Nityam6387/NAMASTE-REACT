// import { useState, useEffect } from "react";


import { useState, useEffect } from "react";

const useRestaurantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    if (id) {
      fetchInfo();
    }
  }, [id]);  //⭐⭐ important: id change hote hi menu load

  const fetchInfo = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/restaurant/${id}`);
      const json = await response.json();

      console.log("FULL JSON:", json);

      if (json.data) {
        setResInfo(json.data);   //⭐ correct path
      } else {
        console.log("⚠ json.data missing");
        setResInfo(null);
      }
    } catch (err) {
      console.log("❌ Error fetching menu:", err);
      setResInfo(null);
    }
  };

  console.log("menuu is", resInfo);

  return resInfo;
};

export default useRestaurantMenu;



// const useRestaurantMenu = (id) => {
         
//     const[resId,setResId] = useState(null);
    
//     useEffect(() => {
//           fetchInfo(); 
        
//     },[]) 
         
    

//     const fetchInfo = async () => {
//          const data = await fetch(`http://localhost:5000/api/restaurant/${id}`) ;
//          const json = await data.json();
//          console.log("json data is ", json.data);
         
//              setResId(json.data);
//     }

//     // console.log("level 1 " , json);
//     console.log("menuu is",resId);

//     return resId;
// }

// export default useRestaurantMenu;