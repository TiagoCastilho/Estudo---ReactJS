import { MainRoutes } from "./routes/MainRoutes";

const App = () => {
  
  return(
    <div>
      <header>
        <h1>Galeria de Fotos</h1>
      </header>
      <hr />
      <div>
        <MainRoutes />
      </div>
      <hr />
      <footer>
        Todos os direitos reservados
      </footer>
    </div>
  );
}

export default App;