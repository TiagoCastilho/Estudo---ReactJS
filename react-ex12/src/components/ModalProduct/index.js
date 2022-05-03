import React, { useState, useEffect } from "react";
import { ProductIngredients, ProductName } from "../ProductItem/styled";
import { 
    Container,
    ProductArea,
    ProductButtons,
    ProductPhoto,
    ProductInfoArea,
    ProductDetails,
    ProductQuantityArea,
    ProductNameModal,
    ProductIngredientsModal,
    ProductButton,
    ProductQuantity,
    ProductQtImage,
    ProductQtText,
    ProductPrice
} from "./styled";
import minusImg from "../../assets/minus.png";
import plusImg from "../../assets/plus.png";

export default ({ data, setStatus }) => {
    const [qt, setQt] = useState(1);

    useEffect(() => {
        setQt(1);
    }, [data]);

    const handleCancelButton = () => {
        setStatus(false);
    }

    const handleMinusQt = () => {
        if(qt > 1) {
            setQt(qt - 1);
        }
    }

    const handlePlusQt = () => {
        setQt(qt + 1);
    }

    return (
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image} />
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductNameModal>{data.name}</ProductNameModal>
                        <ProductIngredientsModal>{data.ingredients}</ProductIngredientsModal>
                    </ProductDetails>
                    <ProductQuantityArea>
                        <ProductQuantity>
                            <ProductQtImage onClick={handleMinusQt} src={minusImg} />
                            <ProductQtText>{qt}</ProductQtText>
                            <ProductQtImage onClick={handlePlusQt} src={plusImg} />
                        </ProductQuantity>
                        <ProductPrice>
                            R$ {(data.price * qt).toFixed(2)}
                        </ProductPrice>
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButton small={true} onClick={handleCancelButton}>Cancelar</ProductButton>
                <ProductButton>Adicionar ao Carrinho</ProductButton>
            </ProductButtons>
        </Container>
    );
}