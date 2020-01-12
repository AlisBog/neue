import React from 'react';
import styled from 'styled-components';

export default function FavoriteProduct() {
    const { product } = this.props;
    const { chosenProduct } = this.props;
    const { title, id } = product;
    const { img, inCart, color, colorT } = chosenProduct;
    return (
        <ItemWrapper>
            <div>
                <div>
                    <img src={img} alt="product" className="card-img"/>
                    <div>
                        {color}
                    </div>
                    <div>
                        {title}
                    </div>
                </div>
            </div>
        </ItemWrapper>
    )
}

const ItemWrapper = styled.div`
    .item{
        width: 10vw;
        height: 27vh;
    }
    .card-img{
        height: 25vh;
    }
`
