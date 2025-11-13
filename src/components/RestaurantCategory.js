import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data}) => {
    console.log("accordian is",data);
    const[showItems , setShowItems] = useState(false);
    const toggler = () => {
          setShowItems(!showItems);
    }
    return (
        <div className="w-full sm:w-9/12 md:w-7/12 lg:w-6/12 mx-auto my-4 bg-gray-100 p-4"> 
        <div onClick = {toggler} className="flex justify-between">
            <span className="font-bold text-lg"> {data?.title} ({data?.itemCards?.length}) </span>
            <span> {"🔽"} </span>
        </div>
           { showItems && <ItemList list = {data?.itemCards}/> }
        </div>
    )
};

export default RestaurantCategory;