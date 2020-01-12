import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import like from '../img/like.png';
import cart from '../img/shopping-bag.png';

export default class Navbar extends Component {
    render() {
            return (
                <ProductConsumer>
                    {(value) => {
                            return(
                                <NavWrapper className="navbar navbar-expand-sm px-sm-5 d-flex justify-content-start">
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item ml-5 ">
                                            <Link to={{
                                                pathname: '/',
                                                state: {
                                                    disable: true
                                                }
                                            }} className="nav-link">
                                                <strong>neue</strong>
                                            </Link>
                                        </li>
                                        <li className="nav-item ml-5">
                                            <Link to={{
                                                pathname: '/products',
                                                state: {
                                                    disable: false
                                                }
                                            }} className="nav-link">
                                                products
                                            </Link>
                                        </li>
                                        <li className="nav-item ml-5">
                                            <Link to="/cart" className="nav-link">
                                            <img className="cart mx-3" src={cart} alt="like"></img> cart
                                            </Link>
                                        </li>
                                        <li className="nav-item ml-5">
                                            <Link to="/favorites" className="nav-link">
                                                <img className="heart mx-3" src={like} alt="like"></img>  favorites
                                            </Link>
                                        </li>
                                        <li className="disabled nav-item ml-5 pl-5 search">
                                            <form className="form-inline md-form form-sm mt-0 d-flex justify-content-end">
                                                <input className="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
                                                aria-label="Search"/>
                                                <i className="fas fa-search" aria-hidden="true"></i>
                                            </form>
                                        </li>
                                    </ul>
                                </NavWrapper>
                            )
                    }}
                </ProductConsumer>
            )

        }
        
    };

const logoStyle = {
    size: '16px',
    'font-weight': 'bold'
};

const NavWrapper = styled.nav`
    .nav-link{
        color:#55574d;
        font-size:0.9rem;
        text-transform:capitalize;
    }
    li i{
        margin: auto;
    }
    a {
        display:inline-flex;
        align-items:flex-start;
        .cart, .heart{
            width:22px;
            height:22px;
        }
    }
   
`
