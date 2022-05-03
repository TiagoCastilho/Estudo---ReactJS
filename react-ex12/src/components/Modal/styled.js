import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 900;
    display: ${props=>props.status ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
`;

export const ModalBody = styled.div`
    background-color: #FFF;
    border-radius: 20px;
    box-shadow: 0 0 50px #000;
    max-width: 90vw;
    max-height: 90vh;
    overflow: auto;
`;