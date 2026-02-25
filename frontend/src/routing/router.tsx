import { createBrowserRouter } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Home from "../pages/Home"
import PrivateRoutes from "../components/PrivateRoutes"
import Training from "../pages/Training"

const router = createBrowserRouter([
    { path: "/", element: <Training />},
    // { path: "/", element: <Login />},
    { path: "/register", element: <Register />},
    { 
        element: <PrivateRoutes />,
        children: [
            { path: "/home", element: <Home />},
            // { path: "/training", element: <Training />}
        ]
    }
])

export default router

