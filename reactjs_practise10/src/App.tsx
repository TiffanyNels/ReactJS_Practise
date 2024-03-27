import React from 'react';
import './App.css';
import { Person } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person 
        name="Tiffany"
        email="tnelsweb@gmail.com"
          age={23}
        isMarried={true}
        friends={["jake", "jessica", "jerry"]}
      />
    </div>
  );
}

export default App;
