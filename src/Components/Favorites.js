import React from 'react';
import Navbar from './Navbar';
import { ProductConsumer } from '../context';
import FavoriteProduct from './Product';
import EmptyFavorites from './EmptyFavorites';
import Title from './Title';


export default function Favorites() {

    return (
        <React.Fragment>
            <Navbar />
            <ProductConsumer>
                {(value) => {
                    const { favorites } = value;
                    if(favorites.length > 0){
                        return (
                            <React.Fragment>
                                <Title name="your" title="favorites"/>
                                {
                                    favorites.map(item => {
                                        return <FavoriteProduct product={item[0]} chosenProduct={item[1]}/>
                                    })
                                }
                            </React.Fragment>
                        )} else {
                        return <EmptyFavorites/>
                    }
                }}
            </ProductConsumer>
        </React.Fragment>
    )
};

