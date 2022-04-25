import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { AdPageInArea, Fake } from './styled';
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
                            {loading && <Fake height={300} />}
                        </div>
                        <div className="adInfo">
                            <div className="adName">
                                {loading && <Fake height={20} />}
                            </div>
                            <div className="adDescription">
                                {loading && <Fake height={100} />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="box box--padding">
                        {loading && <Fake height={20} />}
                    </div>
                    <div className="box box--padding">
                        {loading && <Fake height={50} />}
                    </div>
                </div>
            </AdPageInArea>
        </PageContainer>
    );
}

export default AdPage;