import React from 'react';
import AllInventory from './Components/All_Inventory/allInventory';
import NavBar from "./Components/Navbar/navbar";

const App = () => {
  return (
    <div>
      <NavBar/>
      <AllInventory />
    </div>
  );
}

export default App;
