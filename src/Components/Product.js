import React, { Component } from 'react'
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';
import ColorOptions from './ColorOptions';
import cart from '../img/addtocart.png';
import { Link } from 'react-router-dom';


export default class Product extends Component {
    render() {
        const { product } = this.props;
        const { id, title, price } = product;
        const { img, inCart, colorT, isFavorite } = product.variant[0];

        return (
            <ProductConsumer>
                    {(value) => {
                        return (
                            <ProductWrapper className={value.view ? "col-10 mx-auto col-md-7 col-lg-4 my-3 px-1 py-0" : "col-9 mx-auto col-md-6 col-lg-3 my-3 px-1 py-0"}>
                                <div className="card">
                                    <div className="img-container p-0">
                                    
                                        <div className="d-inline-flex b-0 m-0">
                                            <button 
                                                onClick={() => {
                                                    value.addToFavorites(id, colorT)
                                                }}
                                                className="heart-btn">
                                                <i className={isFavorite ? ("heart red fa fa-heart fa-2x") : ("heart fa fa-heart fa-2x")} aria-hidden="true"></i>
                                            </button>
                                            <Link to="/details">
                                            <img 
                                                src={img} 
                                                alt="product" 
                                                className="card-img-top"
                                                onClick={() => {
                                                    value.handleDetail(id, colorT);
                                                }}/>
                                            </Link>
                                        </div>
                                        
                                        <button 
                                            type="button" 
                                            className="btn btn-light cart-btn" 
                                            disabled={inCart ? true : false} 
                                            onClick={() => {
                                                value.addToCart(id, colorT);
                                                value.openModal(id, colorT);
                                            }}
                                        >
                                            {inCart ? (<p className="text-capitalize mb-0" disabled>in cart</p>) : (<img className="cart" alt="addtocart" src={cart}/>)}
                                        </button>
                                    </div>
                                    {/* {card footer} */}
                                    <div className="container card-footer">
                                        <div className="row">
                                            <div className="col-12 d-flex pl-2 justify-content-between">
                                                <p className="align-self-center mb-0">
                                                    {title}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 pt-1 pl-2">
                                                <h6 className="mb-2"> 
                                                    <span className="mr-1">$</span>
                                                    {price}
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 p-0">
                                                <ColorOptions product={product} value={value}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ProductWrapper>
                        )
                    }}
            </ProductConsumer> 
        );
    }          
}


// Making sure to get an error in the console when data is not proper value
Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
        }).isRequired
}

const ProductWrapper = styled.div`
    a:active{
        text-decoration: none;
    }
    .card {
        border:none;
        transition:all 0.5s linear;
        a:hover{
            text-decoration:none;
        }
    }
    .card-footer {
        background:transparent;
        border-top:transparent;
        transition:all 0.5s linear;
    }
    &:hover {
        text-decoration:none;
        .card-footer{
            background:rgba(247,247,247);
        }
    }
    .heart-btn{
        position: absolute;
        background: transparent;
        border: none;
        width: auto;
        z-index: 100;
        height: 15px;
        padding-left: 10px;
        padding-top: 10px;
        outline:0;
    }
    .heart{
        color:white;
        transform: perspective(1px) translateZ(0);
        &:hover{
            cursor:pointer;
        }
        &:active{
            outline:0;
            cursor:pointer;
            animation-name: hvr-pop;
            animation-duration: 0.3s;
            animation-timing-function: linear;
            animation-iteration-count: 1;
        }
    }
    .red{
        color:red;
        transform: perspective(1px) translateZ(0);
        &:hover{
            cursor:pointer;
        }
        &:active{
            outline:0;
            cursor:pointer;
            animation-name: hvr-pop;
            animation-duration: 0.3s;
            animation-timing-function: linear;
            animation-iteration-count: 1;
        }
    }
    @keyframes hvr-pop {
        50% {
            transform: scale(1.8);
        }
    }
    .img-container{
        position:relative;
        overflow:hidden;
        z-index: 99;
    }
    .card-img-top{
        transition:all 0.5s linear;
    }
    .img-container:hover{
        text-decoration:none;
    }
    .img-container:hover .card-img-top{
        transform: scale(1.1);
    }
    .card-img-top:hover{
        text-decoration:none;
    }
    .cart{
        width:30px;
        height:30px;
    }
    .cart-btn{
        position:absolute;
        bottom:0;
        right:0;
        padding: 0.6rem 1.2rem;
        background: var(--mainWhite);
        border: none;
        color: #55574d;
        font-size:1.6rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%,100%);
        border-top: 2px solid var(--mainWhite);
        border-left: 2px solid var(--mainWhite);
        z-index: 1;
    }
    .img-container:hover .cart-btn{
        transform: translate(0%,0%);
        transition:all 0.5s linear;
    }
    .cart-btn:hover{
        background:var(--lightBlue);
        border-top: 2px solid var(--mainWhite);
        border-left: 2px solid var(--mainWhite);
        color: white;
        cursor: pointer;
    }
`
