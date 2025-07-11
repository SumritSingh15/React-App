import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.js";
import Body from "./Components/Body.js";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import RestaurantMenu from "./Components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Components/Error.js";



const AppLayout = () => {
     return (
          <div className="App">
               <Header />
               <Outlet/>
          </div>
     )
}
 const appRouter = createBrowserRouter([
     {
          path: "/",
          element: <AppLayout/>,
          errorElement: <Error/>,
          children:[
               {
                path: "/",
          element: <Body/>,
          },{
                path: "/Home",
          element: <Body/>,
          },
                {
          path: "/About",
          element: <About/>,
     },
     {
          path: "/Contact",
          element: <Contact/>,
     },{
          path: "/restaurants/:resId",
          element: <RestaurantMenu/>,
     }

          ]
     }
    
 ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< RouterProvider router={appRouter} />);
