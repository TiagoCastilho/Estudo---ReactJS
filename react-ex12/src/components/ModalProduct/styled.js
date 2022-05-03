import styled from 'styled-components';

export const Container = styled.div`
    width: 650px;
    padding: 20px;
    color: #136713;
`;

export const ProductArea = styled.div`
    height: 200px;
    display: flex;
`;

export const ProductButtons = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: end;
`;

export const ProductPhoto = styled.img`
    width: 310px;
    border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
`;

export const ProductDetails = styled.div`

`;

export const ProductQuantityArea = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
`;

export const ProductNameModal = styled.div`
    font-size: 30px;
    font-weight: bold;
`;

export const ProductIngredientsModal = styled.div`
    font-size: 14px;
`;

export const ProductButton = styled.button`
    border: 0;
    background-color: #073C07;
    box-shadow: 4px 5px 0 rgba(0, 0, 0, 0.16);
    color: #FFF;
    font-size: ${props=>props.small ? '13px' : '22px'};
    font-weight: bold;
    padding: ${props=>props.small ? '10px' : '10px 20px'};
    margin-left: 15px;
    border-radius: 5px;

    &:hover {
        background-color: #136713;
        transition: all ease 0.4s;
        cursor: pointer;
    }
`;

export const ProductQuantity = styled.div`
    display: flex;
    align-items: center;
`;

export const ProductQtImage = styled.img`
    width: 18px;
    height: auto;
    color: #136713;
    margin: 0 10px;
    cursor: pointer;
`;

export const ProductQtText = styled.div`
    font-size: 25px;
    font-weight: bold;
`;

export const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: bold;
`;