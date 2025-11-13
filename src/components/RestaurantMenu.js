import {useState , useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    // const[resInfo , setResInfo] = useState(null);

    // useEffect(() => {
    //     fetchInfo();
    // },[]);
    
    console.log("useparams is" ,useParams());
    const{id} = useParams();

    const resInfo = useRestaurantMenu(id);

    // const fetchInfo = async () => {
    //     const data = await fetch("http://localhost:5000/api/restaurant/" + id);
    //     const json = await data.json();
    //     setResInfo(json.data);
    // }

if (!resInfo) return <Shimmer />;

const { name, city, cuisines, costForTwoMessage } =
  resInfo?.cards?.[2]?.card?.card?.info || {};

const itemCards =
  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards ||
  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.categories?.[0]?.itemCards || [];
 
// console.log("menu is ",resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
console.log("UI MENU IS",itemCards);

const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );

console.log("extract data is", categories);


return (
  <div className="menu text-center my-10">
    <h1 className="font-bold text-center text-2xl my-2">{name}</h1>
    <h2 className="text-center font-bold text-lg my-2">{city}</h2>
    <h3 className="text-center font-bold text-lg my-2">{cuisines?.join(", ")} - {costForTwoMessage}</h3>
    {/* <h2>MENU</h2>
    <ul>
      {Array.isArray(itemCards) &&
        itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs. {item?.card?.info?.price / 100}
          </li>
        ))}
    </ul> */}


      {categories.map((category) => <RestaurantCategory key={category?.card?.card?.categoryId} data = {category?.card?.card}/>)}
    


  </div>
);

}


//     if (resInfo === null) return <Shimmer/>
    
//     console.log("api is",resInfo);
//     // console.log("extract data is" ,resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info);
//     // const {name,avgRating,price} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info;
   
//     const{name,city,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
//     const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories?.[0] ;
     
//     console.log("item is", itemCards);
//     return (
//        <div className="menu">
//         <h1>{name}</h1>
//         <h2>{city}</h2>
//         <h3>{cuisines.join(" , ")} - {costForTwoMessage}</h3>
//         <h2> MENU </h2>
//         <ul> {itemCards.map(item => <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {"Rs."}  {item?.card?.info?.price/100}</li>)} </ul> 
//        </div> 
//     )
// }

export default RestaurantMenu;