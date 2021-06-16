import React from 'react'; 
import { makeStyles } from '@material-ui/core';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { NavBarStyle } from './NavBarStyle';
import { CartWidget } from '../CartWidget/CartWidget';

const useStyle = makeStyles((theme) => NavBarStyle(theme));

export const NavBar = props => {
    const classes = useStyle()
    return <>
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.toolBar}>
                <Typography variant='h3' className={classes.title}>
                    Rame kids
                </Typography>
                <Button variant='h4' className={classes.buttons}>home</Button>
                <Button variant='h4' className={classes.buttons}>contac</Button>
                <CartWidget/>
            </Toolbar>
        </AppBar>
    </>
}
