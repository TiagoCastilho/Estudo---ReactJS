import { useState, useEffect } from 'react';
import { AlbumType } from '../types/AlbumType';
import { AlbumItem } from "../components/AlbumItem";
import { api } from "../api/AlbumApi";


export const AlbumList = () => {
    const [albums, setAlbums] = useState<AlbumType[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadAlbums();
    }, []);

    const loadAlbums = async () => {
        try {
        setLoading(true);      
        let json = await api.getAllAlbums();
        setLoading(false);
        setAlbums(json);
        } catch(e) {
        setLoading(false);
        setAlbums([]);
        }
    }
    return(
        <div>
            {loading &&
                <div>Carregando...</div>
            }

            {!loading && albums.length > 0 &&
                <div>
                {albums.map((item, index) => (
                    <AlbumItem data={item} />
                ))}
                </div>
            }  

            {!loading &&
                <div>
                Ocorreu um erro em sua requisição.<br/>
                Por favor, tente novamente mais tarde.
                </div>
            }
        </div>
    );
}