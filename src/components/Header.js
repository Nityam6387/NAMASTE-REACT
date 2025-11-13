import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {

   const[loginbtn , setLoginbtn] = useState("Login");

   const onlineStatus = useOnlineStatus();

   const {loggedInUser} = useContext(UserContext);

 //Subscribe to the redux-store using the useSelector hook
   const cartItems = useSelector((store) => store.cart.items);

   const[isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <div className = "flex flex-col md:flex-row justify-between items-center shadow-lg bg-green-100 sticky top-0 z-50">
         {/* Logo Section */}
         <div className = "w-full md:w-auto flex justify-between items-center p-3 md:p-4">
            <img className="h-10 sm:h-12 md:h-14" src= {LOGO_URL} alt="Logo"></img>
            
            {/* Mobile Hamburger Menu */}
            <button 
               className="md:hidden text-2xl" 
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               aria-label="Toggle menu"
            >
               ☰
            </button>
         </div>

         {/* Navigation Menu */}
         <div className={`nav-list w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <ul className ="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-0 py-2 md:py-0 px-4 md:px-10">
               <li className="w-full md:w-auto text-center md:text-left px-2 md:px-5 py-1 md:py-0 border-b md:border-b-0 border-gray-300 md:border-none">
                  <span className="text-sm sm:text-base font-semibold">
                     {onlineStatus ? "🟢 Online" : "🔴 Offline"}
                  </span>
               </li>
               <li className="w-full md:w-auto text-center md:text-left px-2 md:px-5 py-1 md:py-0 border-b md:border-b-0 border-gray-300 md:border-none">
                  <Link to ="/" className="text-sm sm:text-base hover:text-green-600 transition-colors"> Home </Link>
               </li>
               <li className="w-full md:w-auto text-center md:text-left px-2 md:px-5 py-1 md:py-0 border-b md:border-b-0 border-gray-300 md:border-none">
                  <Link to ="/about" className="text-sm sm:text-base hover:text-green-600 transition-colors"> About Us </Link>
               </li>
               <li className="w-full md:w-auto text-center md:text-left px-2 md:px-5 py-1 md:py-0 border-b md:border-b-0 border-gray-300 md:border-none text-sm sm:text-base">
                <Link to="/contact" className="text-sm sm:text-base hover:text-green-600 transition-colors"> Contact Us </Link>
               </li>
               <li className="w-full md:w-auto text-center md:text-left px-2 md:px-5 py-1 md:py-0 border-b md:border-b-0 border-gray-300 md:border-none">
                  <Link to = "/cart" className="text-sm sm:text-base hover:text-green-600 transition-colors font-semibold">
                     Cart ({cartItems.length})
                  </Link>
               </li>
               <li className="w-full md:w-auto text-center md:text-left px-2 md:px-5 py-1 md:py-0 border-b md:border-b-0 border-gray-300 md:border-none">
                  <Link to = "/grocery" className="text-sm sm:text-base hover:text-green-600 transition-colors"> Grocery </Link>
               </li>
               <li className="w-full md:w-auto text-center md:text-left px-2 md:px-5 py-1 md:py-0 border-b md:border-b-0 border-gray-300 md:border-none">
                  <button 
                     className="text-sm sm:text-base hover:text-green-600 transition-colors font-semibold" 
                     onClick = {() => {
                        loginbtn === "Login" ? setLoginbtn("Logout") : setLoginbtn("Login")}
                     }
                  > 
                     {loginbtn} 
                  </button>
               </li>
               <li className="w-full md:w-auto text-center md:text-left px-2 md:px-5 py-1 md:py-0 font-bold text-sm sm:text-base text-blue-600"> 
                  {loggedInUser} 
               </li>
            </ul>
         </div>
      </div>
   )
}  

export default Header;