import React from "react";
import { CartArea, CartHeader, CartBody, CartIcon, CartText } from "./styled";
import imgCart from '../../assets/cart.png'

const Cart = () => {

    return (
        <CartArea>
            <CartHeader>
                <CartIcon src={imgCart} />
                <CartText>Meu Carrinho (x)</CartText>
            </CartHeader>
            <CartBody>

            </CartBody>
        </CartArea>
    );
}

export default Cart;