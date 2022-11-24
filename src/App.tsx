import React  from 'react';
import './App.css';

import { Main } from './Main/Main';

function App() {
   
  return (
    <div className="App">
      <Main filter={function (arg0: (item: any) => boolean): unknown {
        throw new Error('Function not implemented.');
      } } address={''} benefits={[]} createdAt={''} description={''} email={''} employment_type={''} id={''} location={{
        lat: undefined,
        long: undefined,
        width: undefined,
        height: undefined
      }} name={''} phone={''} pictures={''} salary={''} title={''} updatedAt={''} />
    </div>
  );
}


export default App;
