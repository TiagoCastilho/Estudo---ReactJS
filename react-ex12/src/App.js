import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import { Container, Menu, PageBody } from './AppStyled';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

import store from './assets/store.png';
import order from './assets/order.png';
import profile from './assets/profile.png';

import PrivateRoute from './components/PrivateRoute';
import MenuItem from './components/MenuItem';
import Cart from './components/Cart';
import ReactToolTip from 'react-tooltip';

export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem title="Loja" icon={store} link="/" />
                    <MenuItem title="Pedidos" icon={order} link="/orders" />
                    <MenuItem title="Meu Perfil" icon={profile} link="/profile" />
                </Menu>
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <PrivateRoute path="/orders">
                            <div>Tela de Pedidos</div>
                        </PrivateRoute>
                        <PrivateRoute path="/profile">
                            <div>Tela de Perfil</div>
                        </PrivateRoute>
                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch>
                </PageBody>
                <Cart />
                <ReactToolTip id='tip-top' place='top' effect='solid' />
                <ReactToolTip id='tip-right' place='right' effect='solid' />
            </Container>
        </BrowserRouter>
    );
}