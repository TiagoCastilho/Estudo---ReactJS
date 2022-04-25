import { doLogout, isLogged } from '../helpers/AuthHandler';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({children}) => {
   
    const isAuth = isLogged();

    if(isAuth === true) {
        return children;
    } else {
       
        return <Navigate to="/signin"/>;
    }
}

export default RequireAuth;