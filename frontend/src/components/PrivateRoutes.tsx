import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import UserContext from '../contexts.ts/UserContext'

const PrivateRoutes = () => {
    //useContext(UserContext);
    const {user} = useContext(UserContext);
    if(Object.keys(user).length === 0)
        return <Navigate to="/" />
    return <Outlet/>
}

export default PrivateRoutes