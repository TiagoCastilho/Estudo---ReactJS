import { useAppSelector } from "./redux/hooks/useAppSelector";

/* Forma 1
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

function App() {
const user = useSelector((state: RootState) => state.user);
*/
function App() {
  const user = useAppSelector(state => state.user);

  return (
    <div>
      Meu nome é: {user.name} e tenho {user.age} anos.<br />
      Tema: ...

      <hr />

      <input type="text" value={user.name}/>

      <hr />

      <button>Switch Theme</button>
    </div>
  );
}

export default App;
