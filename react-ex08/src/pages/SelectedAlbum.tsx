import { useParams, useNavigate } from "react-router-dom";

export const SelectedAlbum = () => {
    const params = useParams();
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1);
    }
    return(
        <div>
            <button onClick={handleBackButton}>Voltar</button>
            <br />
            <div></div>

        </div>
    );
}