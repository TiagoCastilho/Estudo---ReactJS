import styled from 'styled-components';
import bg from'./assets/bg.png';

export const Container = styled.div`
display: flex;
height: 100vh;
background-color: #FF0000
`;

export const Menu = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #136713;
width: 80px;
flex-direction: column;
`;

export const PageBody = styled.div`
display: flex;
background-color: #00980D;
background: url(${bg});
flex: 1;
`;