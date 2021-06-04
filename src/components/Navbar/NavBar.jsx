import React from 'react'
import {Button, AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';




const useStyles = makeStyles(theme=>({
  offset: theme.mixins.toolbar,
  titulo:{flexGrow: 1},

}))



export default function NavBar() {
  const classes = useStyles()
  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.titulo}>
            RAME Kids
          </Typography>
          <Button variant="text" color="inherit">Home</Button>
          <Button variant="text" color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    <div className={classes.offset}> </div>
    
    </div>
  )
}
