import { useState, useEffect } from "react";
import { Movie } from "./types/Movie";

const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadMovies();
  }, []);

  /*
  const loadMovies = () => {
    fetch('https://api.b7web.com.br/cinema/')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setMovies(json);
      });
  }
  */
  const loadMovies = async () => {
    setLoading(true);
    let response = await fetch('https://api.b7web.com.br/cinema/');
    let json = await response.json();
    setLoading(false);
    setMovies(json);
  }

  return (
    <div>
      <p>Total de Filmes: {movies.length}</p><br />

      {loading &&
        <div>Carregando...</div>
      }
      
      <div className="grid grid-cols-6 gap-3">
        {movies.map((item, index) => (
          <div>
            <img src={item.avatar} className="w-32 block" />
            {item.titulo}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;