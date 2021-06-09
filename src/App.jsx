import React from 'react';
import {ItemListContainer} from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './themes/temaconfiguracion';

function App() {
  return (
    <ThemeProvider>
      <NavBar/>
      <ItemListContainer greeting="Prendas"/>
    </ThemeProvider>
   
  )
}
export default App;
