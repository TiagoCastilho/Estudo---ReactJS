import React, { useState } from "react";
import { SearchArea, SignInArea } from './styled';
import useApi from '../../helpers/HelperAPI';

import { PageContainer } from "../../components/MainComponents";

const SignIn = () => {
    const api = useApi();

    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type='text' name='q' placeholder="O que você procura?" />
                            <select name="state">

                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className="categoryList">

                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <SignInArea>                
                    ...
                </SignInArea>
            </PageContainer>
        </>
    );
}

export default SignIn;