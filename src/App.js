import React , { lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Cart from "./components/Cart.js";
import Contact from "./components/Contact.js";
import UserContext from "./utils/UserContext.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
// import Grocery from "./components/Grocery.js";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import Contact from "./components/Contact.js";

const Grocery = lazy(()=>import("./components/Grocery.js"));

const AppLayout = () => {

   const[userName , setUserName] = useState("DEFAULT USER");
   
   useEffect(() => {
      
      const data = {
         name : "DOGESH"
      }
      setUserName(data.name);
   },[])
   
   return ( 

   <Provider store = {appStore}>
      
   <UserContext.Provider value= {{loggedInUser : userName , setUserName}}>
    <div className="app">
           <Header />
           <Outlet />
    </div>   
       </UserContext.Provider>

   </Provider>
   )
}


const createRouter = createBrowserRouter([
   {
     path: '/',
     element: <AppLayout/>,
     children: [{
       path: "/",
       element: <Body/>,
      },
      {
       path: '/about',
       element: <About/>,
      },
      {
         path: "/restaurant/:id",
         element: <RestaurantMenu/>
      },
      {
         path: "/grocery",
         element: <Suspense fallback = {<h1> Loading.....</h1>}> <Grocery/></Suspense>
      },
      {
         path: "/cart",
         element: <Cart/>
      },
       {
         path: "/contact",
         element: <Contact/>
      }
              ]
     
   },
   // {
   //    path: '/about us',
   //    element: <About/>,
     
   // },
   {

   },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router = {createRouter} />);

