import React from "react";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import "boxicons";

function App() {
  return (
    <>
      <div className="App">
      <ItemListContainer texto="BIENVENIDOS A NUESTRA TIENDA"/>

      <NavBar />
      </div>

      
    </>
  );
}

export default App;



