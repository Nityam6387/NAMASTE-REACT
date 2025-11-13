import { useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData.js";
import Shimmer from "./Shimmer";
import Loader from  "./Loader";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const[resListState,setresListState] = useState([]);
    const[filteredRestaurant , setFilteredRestaurant] = useState([]);

    const [searchList , setSearchList] = useState("");

   
    console.log("fetched data is" , resListState);
    useEffect(() => {
     fetchData();     
    },[]);

      const fetchData = async () => {
            //  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            //  );
            //  const json = await data.json();
            //  console.log(json);
            const swiggyAPI = "http://localhost:5000/api/restaurants"; // your actual URL

            
            // const proxy = "https://corsproxy.io/?";

// fetch(proxy + encodeURIComponent(swiggyAPI))
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));
            //   const data = await fetch(proxy + encodeURIComponent(swiggyAPI));
              const data = await fetch(swiggyAPI);

              const json = await data.json();
              // console.log(json.data.cards);  
              

              const restaurant = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
              setresListState(restaurant);
              setFilteredRestaurant(restaurant);


              // let res = [];

              // for (let card of json?.data?.cards) {                
              //   if (card && card?.card?.card?.id == "restaurant_grid_listing_v2") {     
              //     console.log("len of ", card?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length);
                               
              //     // res.push(card.card.card.gridElements.infoWithStyle.restaurants)
              //     const restaurants = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
              //     setresListState(restaurants);
              //     break;
              //   }
              // }
              // // setresListState(res[0]);
              // // console.log("card is ", res);
                };
   
   
   const onlineStatus = useOnlineStatus();
  
   if(onlineStatus === false)
     return (
    <div className="status-wrapper">
    <h1> Oops! There is no  internent connectivity</h1>
    <h3>Kindly Check Your internent Connection .</h3>
    </div>
   );



   if(resListState.length === 0) return <Shimmer/> ;
   
 //Conditional Rendering               
    // if(resListState.length === 0){
    //   return(
    //     <Shimmer/>,
    //     // <Loader/>
    //   )
    // }
   
    // return resListState.length === 0 ? ( <Shimmer/> ) :

   return (
     <div className = "body">
       <div className="p-4 m-2">
         <div className = "">
          <input data-testid = "searchInput" className="border border-b-black px-5" type="text"  value={searchList} onChange={(e) => {
             setSearchList(e.target.value);
          }}></input>
{/* 
          <button className="px-5 ml-2 py-0.5 rounded-lg bg-green-200" onClick={ () => {
              console.log(searchList)
              const filteredRes = resListState.filter(res => res.info.name.toLowerCase().includes(searchList.toLowerCase()))
              setFilteredRestaurant(filteredRes);               
          }}>  Search  </button> */}

          <button
  className="search-btn px-4 py-2 bg-green-100 m-4 rounded-lg"
  onClick={() => {
    const filteredList = resListState.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchList.toLowerCase())
    );
    console.log("Search Text:", searchList);
    console.log("Filtered:", filteredList);
    // setresListState(filteredList);
    setFilteredRestaurant(filteredList);
  }}
>
  Search
</button>



          {/* <button 
              className="filter-btn px-5 ml-4 rounded-lg bg-blue-200"
              onClick= {() => {
                const filteredList = resListState.filter(
                (res) => res.info.availability.avgRating > 4.3
            );
            setresListState(filteredList);
            console.log("filtered data is" ,resListState);
            }}
             > Top Rated Restaurants </button> */}

             {/* <button 
            className="filter-btn px-5 ml-4 rounded-lg bg-blue-200"
            onClick={() => {
                     const filteredList = resListState.filter(
                    (res) => res.info.avgRating > 4.3
                     )
                       setresListState(filteredList);
                       console.log("filtered data is", filteredList);
                    }}
            >
             Top Rated Restaurants
             </button> */}

             <button 
  className="filter-btn px-5 ml-4 rounded-lg bg-blue-200"
  onClick={() => {
    const filteredList = resListState.filter(
      (res) => res.info.avgRating > 4.3
    );
    setFilteredRestaurant(filteredList); // <- this was missing
    console.log("filtered data is", filteredList);
  }}
>
  Top Rated Restaurants
</button>


              </div>
            </div>

         
         <div className = "res-container flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 md:gap-4 p-2 sm:p-4">
            
            {
  resListState.length > 0 && filteredRestaurant.map((res) => {

    console.log("restaurant data is ", res);  
    console.log("response is ", res["info"]);
    
    return (
     <Link key={res?.info?.id} to = {"/restaurant/" + res?.info?.id }> <RestaurantCard resData={res?.info} /> </Link>
    );
  })
}
             
            {/* {
  resListState.length > 0 && resListState.map((res) => <RestaurantCard key={res.info.id} resData={res.info} /> )
            } */}



             {/* <RestaurantCard resData = {resList[0]}/>
             <RestaurantCard resData = {resList[1]}/>
             <RestaurantCard resData = {resList[2]}/>
             <RestaurantCard resData = {resList[3]}/>
             <RestaurantCard resData = {resList[4]}/>
             <RestaurantCard resData = {resList[5]}/>
             <RestaurantCard resData = {resList[6]}/>
             <RestaurantCard resData = {resList[7]}/>
 */}



            {/* <RestaurantCard resName="Shama Biryani"     cuisin="Biryani, North Indian, Non-Veg"/>
            <RestaurantCard resName="Chikengi Chickens" cuisin="Biryani, North Indian, Non-Veg"/>
            <RestaurantCard resName="Zaika Restaurant"  cuisin="Biryani, North Indian, Non-Veg"/>
            <RestaurantCard resName="Tiwari Non-Veg Points" cuisin="Biryani, North Indian, Non-Veg"/>
            <RestaurantCard resName="Shama Chickens" cuisin="Biryani, North Indian, Non-Veg"/>
            <RestaurantCard resName="Shama Chickens" cuisin="Biryani, North Indian, Non-Veg"/>
            <RestaurantCard resName="Shama Chickens" cuisin="Biryani, North Indian, Non-Veg"/>
            <RestaurantCard resName="Shama Chickens" cuisin="Biryani, North Indian, Non-Veg"/>
            <RestaurantCard resName="Shama Chickens" cuisin="Biryani, North Indian, Non-Veg"/>
            <RestaurantCard resName="Shama Chickens" cuisin="Biryani, North Indian, Non-Veg"/>
            <RestaurantCard resName="Shama Chickens" cuisin="Biryani, North Indian, Non-Veg"/>
            <RestaurantCard resName="Shama Chickens" cuisin="Biryani, North Indian, Non-Veg"/>
            <RestaurantCard resName="Shama Chickens" cuisin="Biryani, North Indian, Non-Veg"/>
            <RestaurantCard resName="Shama Chickens" cuisin="Biryani, North Indian, Non-Veg"/> */}

         </div>
      </div>
   ); 
  };

export default Body;