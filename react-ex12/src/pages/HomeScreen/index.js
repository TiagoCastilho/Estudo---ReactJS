import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Container} from './styled';

import api from '../../api';

import Header from '../../components/Header';

export default () => {
    const history = useHistory();
    const [ headerSearch, setHeaderSearch ] = useState('');

    useEffect(() => {
        const getCategories = async () => {
            const categories = await api.categories();
        };

        getCategories();
    }, []);

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
        </Container>
    );
}