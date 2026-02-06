import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    const user = null;
    if(!user)
        return <Navigate to="/" />
    return <Outlet/>
}

export default PrivateRoutes