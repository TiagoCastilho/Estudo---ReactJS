import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
    CartArea, 
    CartHeader, 
    CartBody, 
    CartIcon, 
    CartText,
    ProductsArea,
    ProductItem,
    ProductPhoto,
    ProductInfoArea,
    ProductName,
    ProductPrice,
    ProductQuantityArea,
    ProductQtImage,
    ProductQtText
} from "./styled";
import cartImg from '../../assets/cart.png';
import downImg from '../../assets/down.png';
import minusImg from "../../assets/minusWhite.png";
import plusImg from "../../assets/plusWhite.png";


const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.cart.products);

    const [show, setShow] = useState(false);

    const handleCartClick = () => {
        setShow(!show);
    }

    const handleProductChange = (key, type) => {
        dispatch({
            type: 'CHANGE_PRODUCT',
            payload:{key, type}
        })
    }

    return (
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src={cartImg} />
                <CartText>Meu Carrinho ({products.length})</CartText>
                {show &&
                    <CartIcon src={downImg} />
                }
            </CartHeader>
            <CartBody show={show}>
                <ProductsArea>
                    {products.map((item, index) => (
                        <ProductItem key={index}>
                            <ProductPhoto src={item.image}/>
                            <ProductInfoArea>
                                <ProductName>{item.name}</ProductName>
                                <ProductPrice>R$ {item.price.toFixed(2)}</ProductPrice>
                            </ProductInfoArea>
                            <ProductQuantityArea>
                                <ProductQtImage 
                                    src={minusImg} 
                                    onClick={() => handleProductChange(index, '-')}
                                />
                                <ProductQtText>{item.qt}</ProductQtText>
                                <ProductQtImage 
                                    src={plusImg} 
                                    onClick={() => handleProductChange(index, '+')}
                                />
                            </ProductQuantityArea>
                        </ProductItem>
                    ))}                    
                </ProductsArea>
            </CartBody>
        </CartArea>
    );
}

export default Cart;