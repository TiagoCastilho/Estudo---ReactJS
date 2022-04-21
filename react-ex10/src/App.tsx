import React from "react";
import { useDispatch } from "react-redux";
import { setName, setAge } from "./redux/reducers/userReducer";

import { useAppSelector } from "./redux/hooks/useAppSelector";

/* Forma 1
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

function App() {
const user = useSelector((state: RootState) => state.user);
*/
function App() {
  const dispatch = useDispatch();
  const user = useAppSelector(state => state.user);

  const changeName = (newName: string) => dispatch(setName(newName));
  const changeAge = (newAge: number) => dispatch(setAge(newAge));


  const handleNameImput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeName(e.target.value);
  }
  const handleAgeImput = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeAge( parseInt(e.target.value));
  }

  return (
    <div>
      Meu nome é: {user.name} e tenho {user.age} anos.<br />
      Tema: ...

      <hr />

      <input type="text" value={user.name} onChange={handleNameImput} />
      <input type="text" value={user.age} onChange={handleAgeImput} />


      <hr />

      <button>Switch Theme</button>
    </div>
  );
}

export default App;
