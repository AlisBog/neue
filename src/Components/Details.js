import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import ColorOptions from './ColorOptions';
import Navbar from './Navbar';
import Slide from './Slide/Slide';

export default class Details extends Component {
    
    render() {
        
        return (
            <ProductConsumer>
                {(value) => {
                    const product = value.detailProduct;
                    const { id, composition, info, price, title } = product;
                    const { img, imgSec, colorT, inCart } = value.detailColor;
                    const productType = product.product;
                    
                    return (
                        <div>
                            <Navbar />
                            <div className="container py-5">
                                {/* product title */}
                                    <div className="row">
                                        <div className="cl-10 mx-auto text-center text-slanted text-blue my-5">
                                            <h1>{title}</h1>
                                        </div>
                                    </div>
                                {/* end of product title */}
                                
                                    <div className="row">
                                        {/* product info */}
                                        <div className="d-flex col-lg-4 col-md-6 my-3 p-0 m-0 text-capitalize">
                                            <img src={img} className="img-fluid" alt="product"/>
                                        </div>
                                        <div className="d-flex col-lg-4 col-md-6 my-3 p-0 text-capitalize">
                                        <img src={imgSec} className="img-fluid" alt="product"/>
                                        </div>
                                        <div className="col-lg-4 mx-auto col-md-10 my-3 pl-5 pr-0 text-capitalize">
                                            <h6 className="text-muted text-title">{title}</h6>
                                            <p className="text-muted mt-3 font-weight-bold">price : <span>$</span>{price}</p>
                                            <p className="text-muted mt-3 mb-2">
                                                <span>{colorT}</span>
                                            </p>
                                            <div className="d-flex col-lg-4 col-md-6 my-3 p-0 m-0">
                                                <ColorOptions product={product} value={value}/>
                                            </div>
                                            <p className="text-muted mt-3">composition: {composition}</p>
                                            <p className="text-muted mt-3">{info}</p>
                                            <Link to="/products">
                                                <ButtonContainer>
                                                    back to products
                                                </ButtonContainer>
                                            </Link>
                                            {/* end of product info */}
                                            {/* buttons */}
                                            <Link to="/cart">
                                                <ButtonContainer
                                                    cart
                                                    disabled={inCart ? true : false } onClick={() => {
                                                        //  I'm using the 'value' from above in function declaration:
                                                        value.addToCart(id, colorT);
                                                        value.openModal(id, colorT);
                                                    }}>
                                                        {inCart ? "inCart" : "add to cart"}
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <Slide productType={productType} value={value}/>
                            </div>
                   
                    
                    );
                }}
            </ProductConsumer>
        )
    }
}
