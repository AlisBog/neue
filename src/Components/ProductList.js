import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';
import SideNavbar from './SideNavbar';
import Navbar from './Navbar';
import styled from 'styled-components';
import ViewAs from './ViewAs/ViewAs';
import Banner from './Banner';
import ScrollToTop from './ScrollToTop';


export default class ProductList extends Component {
    render() {

        return (
            <ProductConsumer>
                {(value) => {
                return (
                    <React.Fragment>
                        <Navbar />
                        
                        <ProductWrapper>
                            <div className="container-fluid">
                                <Title name="neue" title="all products"/>
                                {/* <div className="row">
                                    <div className="col-3 col-lg-2"></div>
                                    <div className="col-9 col-lg-10 mx-auto">
                                        <Banner />
                                    </div>
                                </div> */}
                                <ViewAs/>
                            </div>
                            <div className="container-fluid pt-3 pb-5">
                                <div className="row">
                                    <div className="col-3 col-lg-2">
                                        <SideNavbar />
                                    </div>
                                    <div className="products col-9 col-lg-10 d-flex flex-wrap mx-auto">
                                            { value.products.map(product => {
                                                return <Product id={product.id} product={product}/>
                                                })
                                            }
                                    </div>
                                </div>
                            </div>
                        </ProductWrapper>
                    </React.Fragment>
                    )
                }}
            </ProductConsumer>
        )
    }
}

const ProductWrapper = styled.div`
    .products.col-9.col-lg-10{
        margin: 0 50px;
        padding: 0 50px;
    }
`