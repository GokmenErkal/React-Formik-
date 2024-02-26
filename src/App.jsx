import { useCallback, useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [number, setNumber] = useState(0);

  const inc = useCallback(() => {
    setNumber(number+1)
  },[number])

  return (
    <div className="App">
      <Header inc={inc}/>
      <hr />
      <h2>{number}</h2>
    </div >
  );
}

export default App;
