import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    padding: 15px;
    display: flex;
    align-items: center;
    color: #136713;
    cursor: pointer;
`;

export const ProductPhotoArea = styled.div`
    width: 96px;
`;

export const ProductPhoto = styled.img`
    width: 100%;
    border-radius: 5px;
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    margin: 0 10px;
`;

export const ProductName = styled.div`
    font-size: 20px;
    font-weinght: bold;
`;

export const ProductPrice = styled.div`
    font-size: 14px;
`;

export const ProductIngredients = styled.div`
    font-size: 11px;
`;

export const ProductButtonArea = styled.div``;

export const ProductButton = styled.img`
    width: 15px;
`;
