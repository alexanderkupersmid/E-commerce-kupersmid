import React from 'react';
import { makeStyles } from '@material-ui/core'
// import { ItemCount } from '../ItemCount/ItemCount';
import { itemStyle } from './ItemStyle';


const useStyles = makeStyles((theme) => itemStyle(theme));

export const Item = props => {
    const classes = useStyles();
    const { Prendas } = props;

    return <>
        {Prendas.map((Prenda, i) => {
            return <div className={classes.items} key={i}>
                <img src={Prenda.pictureUrl} alt={Prenda.description} />
                <div className={classes.itemText}>
                    <h3>{Prenda.title}</h3>
                    <span>{Prenda.description} </span>
                    <bdi>
                    <p>${Prenda.price}</p>
                    </bdi>
                </div>

                {/* <ItemCount stock={Prenda.stock} initial={Prenda.initial} /> */}
            </div>
        })}


    </>
}