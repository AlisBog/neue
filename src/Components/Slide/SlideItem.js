import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class SlideItem extends Component {
    render() {
        const { value } = this.props;
        const { productType } = this.props;
        const { productIndex } = this.props;

        const currentProduct = value.products[productIndex];
        const { title, price } = currentProduct;
        const { img, id, colorT } = currentProduct.variant[0];

        return (
            <SlideItemWrapper>
                <Link to="/details"> 
                    <img className="d-block" alt={title} width="150" src={img}
                    onClick={() => {
                        value.handleDetail(id, colorT);
                    }}
                    ></img>
                </Link>
                <div className="footer">
                    <div className="title">{title}</div>
                    <div className="price">{price}$</div>
                    <div className="colors"></div>
                </div>                  
            </SlideItemWrapper>
        )
    }
}

const SlideItemWrapper = styled.div`
    .footer{
        width:150px !important;
        background-color:#e4eaea;
        .title{
            font-size:12px;
        }
    }
`
