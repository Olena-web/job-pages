import React , {useState, useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import { getApiData } from './api';
import {ApiData} from './types';

function App() {
  const [data, setApiData] = useState<ApiData[]>([]);
  useEffect(() => {
    getApiData().then((data) => {
      setApiData(data);
    });
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
       <p>{data[0].name}</p>
       <img src={data[0].pictures[0]} alt="img"></img>
      </header>
    </div>
  );
}


export default App;
