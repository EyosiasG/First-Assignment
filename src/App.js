import './App.css';
import React from 'react';
import Items from './components/items';

function App() {
  return (
    <div className="font-montserrat center max-h-full">
      <div className="card flex flex-col items-center max-w-lg p-6 mt-10 rounded-lg">
        <Items />
      </div>
    </div>

  );
}

export default App;
