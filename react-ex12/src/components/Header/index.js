import React, {useState} from "react";
import { Container, Logo, SearchInput } from './styled';
import logo from "../../assets/logo.png"

const Header = ( {search, onSearch} ) => {
    const [inputActive, setInputActive] = useState(search === '' ? false : true);

    const handleInputFocus = () => {
        setInputActive(true);
    }

    const handleInputBlur = () => {
        if(search === '') {
            setInputActive(false);
        }
    }

    const handleChange = (e) => {
        onSearch( e.target.value );
    }

    return (
        <Container>
            <Logo src={logo} />
            <SearchInput 
                type='text' 
                placeholder="Digite um produto"
                value={search}
                onChange={handleChange}
                active={inputActive}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                />
        </Container>
    );
}

export default Header;