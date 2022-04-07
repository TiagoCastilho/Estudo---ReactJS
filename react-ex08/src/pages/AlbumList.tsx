import { useState, useEffect } from 'react';
import { AlbumType } from '../types/AlbumType';
import { AlbumItem } from "../components/AlbumItem/index";
import { api } from "../api/api";


export const AlbumList = () => {
    const [albums, setAlbums] = useState<AlbumType[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadAlbums();
    }, []);

    const loadAlbums = async () => {
        try {
        setLoading(true);      
        let json = await api.getAlbums();
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
                    <AlbumItem
                        key={index}
                        id={item.id}
                        title={item.title}
                    />
                ))}
                </div>
            }  
        </div>
    );
}