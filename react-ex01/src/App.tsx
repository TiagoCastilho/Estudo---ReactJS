import React, {useState} from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [years, setYears] = useState('');

  const handleInputName = (eventName: React.ChangeEvent<HTMLInputElement>) => {
    setName( eventName.target.value);
  }
  const handleInputLName = (eventLName: React.ChangeEvent<HTMLInputElement>) => {
    setLastName( eventLName.target.value);
  }
  const handleInputYears = (eventYears: React.ChangeEvent<HTMLInputElement>) => {
    setYears( eventYears.target.value);
  }

  return (
    <div>
      <div>
        Nome:
        <br />
        <input type="text" value={name} onChange={handleInputName} />
      </div>

      <div>
        Sobrenome:
        <br />
        <input type="text" value={lastName} onChange={handleInputLName} />
      </div>

      <div>
        Idade:
        <br />
        <input type="number" value={years} onChange={handleInputYears} />
      </div>

      <hr/>

      Olá Sr(a) {name} {lastName}, tudo bem?<br/>
      Você tem {years} anos.
    </div>
  );
}

export default App;