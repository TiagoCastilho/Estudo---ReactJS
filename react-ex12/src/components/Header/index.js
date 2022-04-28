import React, {useState} from "react";
import { Container, Logo, SearchInput } from './styled';
import logo from "../../assets/logo.png"

const Header = () => {
    const [inputActive, setInputActive] = useState(false);

    const handleInputFocus = () => {
        setInputActive(true);
    }

    const handleInputBlur = () => {
        setInputActive(false);
    }

    return (
        <Container>
            <Logo src={logo} />
            <SearchInput 
                type='text' 
                placeholder="Digite um produto"
                active={inputActive}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                />
        </Container>
    );
}

export default Header;