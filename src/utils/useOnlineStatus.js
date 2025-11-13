import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const[onlineStatus,setOnlineStatus] = useState("true");
    
   
    useEffect(() => {
            window.addEventListener("online" , () => {

              setOnlineStatus(true);
              console.log("you are online" , onlineStatus);

    });
     
                       window.addEventListener("offline" , () => {

              setOnlineStatus(false);
              console.log("you are offline" , onlineStatus);

    });

           
    }, [])


   

    return onlineStatus;
}

export default useOnlineStatus;