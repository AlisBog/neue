import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { title, price} = value.modalProduct;
                    const { img } = value.modalColor;

                    if(!modalOpen){
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalized p-5">
                                            <h5>item added to the cart</h5>
                                            <img src={img} className="img-fluid" alt="product"/>
                                            <h5 className="pt-3">{title}</h5>
                                            <h5 className="text-muted">price : $ {price}</h5>
                                            {/* how do I make him remember to return to the last page with Link???   -> */}
                                            <Link to="/products">
                                                <ButtonContainer onClick={() => {
                                                    return closeModal();
                                                }}>
                                                    store
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer cart onClick={() => {
                                                    return closeModal();
                                                }}>
                                                    go to cart
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }

                }}
            </ProductConsumer>
        )
    }
}


const ModalContainer = styled.div`
    position:fixed;
    z-index: 99;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.3);
    display:flex;
    align-items:center;
    justify-content:color-interpolation-filters;
    #modal {
        background:white;
    }
`