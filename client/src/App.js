import { useState } from 'react';
import Tank from './components/tank'
import './App.css';

function App() {

  const [blur, setBlur] = useState(false);
  const [countryName, setCountryName] = useState('');

  const handleClick = (e) => {
    setCountryName(e.target.innerText)
    setBlur(true);
  }

  return (
    <div className="App">
      <header className={ (blur === false ? "App-header" : "App-header-blur") }>
        <h1>My Tanks Collection</h1>
        <ul className="country-col">
          <li onClick={ handleClick }>USA</li>
          <li onClick={ handleClick }>USSR</li>
          <li onClick={ handleClick }>Sweden</li>
          <li onClick={ handleClick }>UK</li>
        </ul>
        
      </header>
      <Tank blur={ blur } countryName={ countryName } onClick={() => setBlur(false)}/>
    </div>
  );
}

export default App;
