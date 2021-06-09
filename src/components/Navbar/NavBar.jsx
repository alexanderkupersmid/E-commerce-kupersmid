import React from 'react';
import {NavBarStyle} from './NavbarStyle';
import {CartWidget} from '../CartWidget/CartWidget';
import {Button, AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

//como debo importar el logo desde la carpeta image?
//probe con ../../image/logo.png pero me dio error.

const useStyles = makeStyles(theme=>({
  offset: theme.mixins.toolbar,
  titulo:{flexGrow: 1},

}))



export default function NavBar() {
  const classes = useStyles()
  return (
    <div>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.titulo}>
            RAME Kids
          </Typography>
          <Button variant="text" color="inherit">Home</Button>
          <Button variant="text" color="inherit">Contact</Button>
          <CartWidget />
        </Toolbar>
      </AppBar>
    <div className={classes.offset}> </div>
    
    </div>
  )
}
