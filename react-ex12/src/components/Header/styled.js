import styled from "styled-components";
import imgSearch from '../../assets/search.png';

export const Container = styled.div`
    background-color: #136713;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    width: auto;
    height: 66px;
`;

export const SearchInput = styled.input`
    border: 0;
    border-radius: 25px;
    background-color: #FFF;
    background-image: url(${imgSearch});
    background-size: 32px;
    background-repeat: no-repeat;
    background-position: 11px center;
    width: ${props=>props.active ? 300 : 0}px;
    height: 50px;
    outline: 0;
    padding-left: 50px;
    transition: all ease 0.4s;
`;