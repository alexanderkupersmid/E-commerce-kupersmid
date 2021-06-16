import React from 'react';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Prendas"/>
    </>
   
  )
}
export default App;
