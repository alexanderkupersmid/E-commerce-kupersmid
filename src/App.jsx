import React from 'react';
import NavBar from './components/Navbar/NavBar';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './themes/temaconfiguracion';

function App() {
  return (
    <ThemeProvider>
      <NavBar/>
    </ThemeProvider>
   
  )
}
export default App;
