import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { AdPageInArea } from './styled';
import useApi from '../../helpers/HelperAPI';

import { PageContainer } from "../../components/MainComponents";

const AdPage = () => {
    const api = useApi();
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [addInfo, setAdInfo] = useState([]);

    return (
        <PageContainer>
            <AdPageInArea>
                <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                            ...
                        </div>
                        <div className="adInfo">
                            <div className="adName">
                                ...
                            </div>
                            <div className="adDescription">
                                ...
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    ...
                </div>
            </AdPageInArea>
        </PageContainer>
    );
}

export default AdPage;