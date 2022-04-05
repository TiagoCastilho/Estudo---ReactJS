import { useEffect, useState } from "react";
import { Album } from './types/Album';
import { AlbumItem } from "./components/AlbumItem";
import { api } from "./api";

const App = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
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
      <header>
        <h1>Galeria de Fotos</h1>
      </header>
      <hr />

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
      
      <hr />
      <footer>
        Todos os direitos reservados
      </footer>
    </div>
  );
}

export default App;