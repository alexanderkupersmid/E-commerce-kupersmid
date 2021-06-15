import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core'
import { Item } from '../Item/Item';
import { itemListStyle } from './ItemListStyle'
import CircularProgress from '@material-ui/core/CircularProgress';

const mockCall = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1,
                      title: 'Peach Monkey',
                      description: 'Mono de lino super fresco', 
                      price: '980', 
                      pictureUrl: '/image/MonoDurazno.JPG', 
                      initial: 1, 
                      stock:6 },
                { id: 2, 
                    title: 'White T-Shirt', 
                    description: 'Remera de lino', 
                    price: '980', 
                    pictureUrl: '/image/RemeraBlanca.JPG', 
                    initial: 1, 
                    stock: 5},
                { id: 3, 
                    title: 'yellow T-Shirt', 
                    description: 'Remera Amarilla',
                    price: '750', 
                    pictureUrl: '/image/RemeraAmarilla.JPG', 
                    initial: 1, 
                    stock: 4 },
                { id: 4, 
                    title: 'Striped Dress', 
                    description: 'Vestido de lino a rayas', 
                    price: '920', 
                    pictureUrl: '/image/VestidoRayas.JPG', 
                    initial: 1, 
                    stock: 6 },
                { id: 5, 
                    title: 'Floral Dress', 
                    description: 'Vestido de algodon', 
                    price: '850', 
                    pictureUrl: '/image/VestidoFlores.JPG', 
                    initial: 1, 
                    stock: 5 },
                { id: 6, 
                    title: 'White Dress', 
                    description: 'Vestido de lino', 
                    price: '800', 
                    pictureUrl: '/image/VestidoBlanco.JPG', 
                    initial: 1, 
                    stock: 5 },
            ])
        }, 8000);
    })
}



const useStyles = makeStyles((theme) => itemListStyle(theme));

export const ItemList = () => {
    const classes = useStyles();
    const [Prendas, setPrendas] = useState([]);

    useEffect(() => {
        mockCall().then(data => {
            setPrendas(data);

        })
    }, [])


    return <>
        {Prendas.length === 0 ? (
            <div className={classes.preloaderContainer}>
                <CircularProgress size='6rem' color='inherit'/>
            </div>

        ) : (
            <div className={classes.gridContainer}>
                <Item Prendas={Prendas} />
            </div>
        )}

    </>
}