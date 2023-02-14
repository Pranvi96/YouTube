import React from "react";
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import MainContainer from "./src/components/MainContainer";
import WatchPage from "./src/components/WatchPage";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body/>,
        children: [{
            path: "/",
            element: <MainContainer/>
        }, {
            path: "watch",
        element: <WatchPage/>
        }]
    },
])

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <RouterProvider router={appRouter}/>
        </div>
    )
} 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);