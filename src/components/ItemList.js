import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants"; 
import { addItem , removeItem } from "../utils/cartSlice";

const ItemList = ({list , isCart = false}) => {
    console.log("menu items is" , list);

    const dispatch = useDispatch();

    const handleAddItem = (list) => {
            console.log("added payload item", list);
        dispatch(addItem(list));
    };

    const handleRemoveItem = (list) => {
        console.log("remove payload item sfsdfsk", list?.card?.info?.id);
        dispatch(removeItem(list?.card?.info?.id));
    };

    return (
     <div>
        { list.map((list) =>  (
        <div key={list?.card?.info?.id} className="my-4 border-gray-300 border-b-4 flex justify-between">
            <div className=" w-9/12 text-left mx-1 my-2"> 
                <div className="py-2 font-bold">
     <span>{list?.card?.info?.name}</span>
     <span> - Rs. {list?.card?.info?.price/100}</span>
    </div>
     <p className="text-xs"> {list?.card?.info?.description} </p>
                            </div>
                            <div className = "w-3/12 h-auto" >
                        <div className="absolute h-auto">          
                         { isCart ?  ( <button onClick = {() => handleRemoveItem(list)} className=  "bg-black p-2 mx-16  text-white" > REMOVE - </button> ) : 
                                    ( <button onClick = {() => handleAddItem(list)} className=  "bg-black p-2 mx-16  text-white" > ADD + </button> ) }
                            </div> 
                            <img  src={CDN_URL + list?.card?.info?.imageId }></img>
                            </div> 
            </div>
             ))}               
             </div>
        );
    };
       

    
//         )
//    <div className="my-8 border-gray-300 border-b-8">
//     <div>
//      <span>{list.map((list) => list?.card?.info?.name)}</span>
//      <span> - Rs. {list.map((list) => list?.card?.info?.price/100)}</span>
//      </div>
//      <p> {lis} </p>
//    </div>
//     )


export default ItemList;