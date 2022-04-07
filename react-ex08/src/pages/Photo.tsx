import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { PhotoType } from "../types/PhotoType";

export const Photo = () => {
    const [photoInfo, setPhotoInfo] = useState<PhotoType>();
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1);
    }

    useEffect(() => {
        if(params.id) {
            loadPhoto(params.id);
        }    
    }, []);

    const loadPhoto = async (id: string) => {
        setLoading(true);      
        let photo = await api.getPhoto(id);
        setLoading(false);
        setPhotoInfo(photo);
    }

    return(
        <div>
            {loading &&
                <div>Carregando...</div>
            }

            {photoInfo &&
                <>
                    <button onClick={handleBackButton}>Voltar</button>
                    <br />
                    <br />
                    {photoInfo.title}
                    <br />
                    <br />
                    <img src={photoInfo.url} alt={photoInfo.title} />
                </>
            }
        </div>
);
}