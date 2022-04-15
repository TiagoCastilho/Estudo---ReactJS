import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../contexts/Context';

export const ShowData = () => {
    const {state, dispatch} = useContext(Context);
    return (
        <div>
            Tela ShowData de {state.user.name} de {state.user.age} anos.
            <br />
            <Link to='/'>Ir para SignUp</Link>
        </div>
    );
}