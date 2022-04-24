import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchArea, SignInArea } from './styled';
import useApi from '../../helpers/HelperAPI';

import { PageContainer } from "../../components/MainComponents";
import AdItem from "../../components/partials/AdItem";

const SignIn = () => {
    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    });

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    });

    useEffect(() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setAdList(json.ads);
        }
        getRecentAds();
    });

    return (
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type='text' name='q' placeholder="O que você procura?" />
                            <select name="state">
                                {stateList.map((i, k)=>
                                    <option key={k} value={i.name}>{i.name}</option>
                                )}
                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className="categoryList">
                        {categories.map((i, k)=>
                            <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                                <img src={i.img} alt="" />
                                <span>{i.name}</span>
                            </Link>
                        )}
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <SignInArea>                
                    <h2>Anúncios Recentes</h2>
                    <div className="list">
                        {adList.map((i, k) => 
                            <AdItem key={k} data={i} />
                        )}
                    </div>
                    <Link to="/ads" className="seeAllLink">Ver todos</Link>

                    <hr />

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nulla at orci facilisis maximus. Nam vitae mauris eu nibh viverra faucibus. Aenean in orci non lacus varius fermentum. Maecenas at faucibus risus. Suspendisse eu justo mattis, pretium neque eget, porta enim. Morbi tellus leo, pulvinar ac tortor eu, imperdiet vulputate felis. Nam lectus magna, lobortis quis sapien sed, egestas aliquet ex. Aenean lacus elit, vestibulum et vestibulum in, varius non nulla. Cras vitae ante ac erat aliquet ultricies at eu dui. Ut porta euismod turpis nec facilisis. Praesent iaculis facilisis quam at interdum. Duis faucibus elit eget facilisis venenatis. Integer rutrum dolor sit amet suscipit ultricies.
                </SignInArea>
            </PageContainer>
        </>
    );
}

export default SignIn;