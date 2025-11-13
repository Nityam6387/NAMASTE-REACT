import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items); //efficient way to subscribe the store
    /*  const cart = useSelector((store) => store); 
      const cartItems = cart.items; */  //not a proficent way to do it because any changes in the whole store will effect this varible and effects accordingly to this component.

    const dispatch = useDispatch();

    const handleClearCart = () => {
    //console.log("clicked !!");
       dispatch(clearCart());
    };

    return (
        <div className = "text-center m-4 p-4">
            <h1 className = "text-center text-2xl font-bold">Cart</h1>
            <button className="m-4 p-2 font-bold font-xl text-center bg-black text-white rounded-md" onClick={handleClearCart}>Clear Cart</button>
        <div className="w-6/12 m-auto">
        {cartItems.length === 0 && <h1> Cart is empty ! Add a product in cart</h1>}
            <ItemList list = {cartItems} isCart={true} />
        </div>
        </div>
        
    )
};

export default Cart;