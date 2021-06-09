import React from 'react';
import {makeStyles} from '@material-ui/core';
import {cartWidgetStyle} from './CartWidgetStyle';
import AddShoppingCartTwoToneIcon from '@material-ui/icons/AddShoppingCartTwoTone';


const useStyles = makeStyles((theme) => cartWidgetStyle(theme));

export const CartWidget = () => {
    const classes = useStyles();

    return <>
        <div className={classes.logoCarrito}>
            <a href="index.html" className="iconoCarrito">
                <div className={classes.carritoNombre}>
                    <AddShoppingCartTwoToneIcon fontSize="large" />
                    <p className={classes.estiloCarrito}>Carrito</p>
                </div>
            </a>
            <span className={classes.carritoPrecio}>
                <bdi>
                    <span>$</span>0.00
                </bdi>
            </span>
            <div className={classes.CarroVacio}>
                <div className={classes.containerCarroVacio}>
                    <p> El carrito se encuentra vacio</p>
                </div>
            </div>
        </div>
    </>

}