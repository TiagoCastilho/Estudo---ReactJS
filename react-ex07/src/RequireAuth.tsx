/* Alternativa 1
import { useNavigate } from 'react-router-dom';
*/

// Alternativas 2 e 3
import { Navigate } from 'react-router-dom';

type Props = {
    children: JSX.Element
}

export const RequireAuth = ({ children }: Props) => {
    /* Alternativa 1
    const navigate = useNavigate();
    const isAuth = false;

    if(isAuth) {
        return children;
    } else {
        navigate('/login');
        return null;
    }
    */

    /*Alternativa 2
    const isAuth = false;

    if(isAuth) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
    */

    // Alternativa 3
    const isAuth = true;

    if(!isAuth) {
        return <Navigate to="/login" />;        
    } 
    
    return children;
    
}