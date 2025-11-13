import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const styleCard = {
   backgroundColor:"rgb(226, 223, 223)"
};

const RestaurantCard = (props) => {
   // console.log(props);
   // const {resName , cuisin} = props;

   const {resData} = props;

   console.log("resData is ", resData);

   const {loggedInUser} = useContext(UserContext);


   
   // const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = resData?.gridElements.infoWithStyle.info[0];  //destructuring the object
      const {cloudinaryImageId,avgRating,costForTwo,cuisines,sla} = resData;  //destructuring the object

   const baseURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660" 
   return (
      <div data-testid = "resCard" className="res-card m-2 sm:m-3 md:m-4 p-3 sm:p-4 w-full sm:w-[280px] md:w-[300px] lg:w-[320px] rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-200 hover:shadow-lg hover:scale-105">
         <img 
            className="res-logo rounded-lg w-full h-[150px] sm:h-[180px] md:h-[200px] object-cover" 
            alt="biryani-image" 
            src= { CDN_URL + cloudinaryImageId } 
         ></img>

         <h3 className="font-bold text-base sm:text-lg py-3 sm:py-4 truncate">{resData.name}</h3>
         <h4 className="text-sm sm:text-base text-gray-600 truncate">{cuisines.join(" , ")}</h4>
         <div className="flex items-center justify-between mt-2">
            <h4 className="text-sm sm:text-base font-semibold text-green-600">⭐ {avgRating}</h4>
            <h4 className="text-sm sm:text-base text-gray-600">{sla.slaString}</h4>
         </div>
         <h4 className="text-sm sm:text-base mt-1">{costForTwo}</h4> 
         <h4 className="font-bold text-xs sm:text-sm mt-2 text-blue-600"> { loggedInUser } </h4>
         {/* <h4>{cuisines.join(" , ")}</h4>
         <h4>{avgRating}</h4>
         <h4>{costForTwo}</h4>
         <h4>{sla.slaString}</h4> */}


         {/* <h3>{resData.info.name}</h3>
         <h4>{resData.info.cuisines.join(" , ")}</h4>
         <h4>{resData.info.avgRating}</h4>
         <h4>{resData.info.costForTwo}</h4>
         <h4>{resData.info.sla.slaString}</h4> */}
         {/* <h3> {resName} </h3>
         <h4>{cuisin}</h4>
         <h4>4.2 stars</h4>
         <h4>38 mins</h4> */}
      </div>
   )
}


export default RestaurantCard;