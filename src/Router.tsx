import { createBrowserRouter } from "react-router-dom";
import About from "./commponent/movingComp/About";
import AppLayout from "./commponent/movingComp/AppLayout";
import Recipes from "./commponent/movingComp/Recipes";
import Home from "./commponent/movingComp/Home";

export const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <>main error</>,
        children: [
            { path: '/about', element: <About />, },
            { path: '/recipes', element: <Recipes /> },
            { path: '/', element: <Home /> },
        ]
    }
])