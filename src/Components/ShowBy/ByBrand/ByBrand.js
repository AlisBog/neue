import React, { Component } from 'react';
import Product from '../../Product';
import Title from '../../Title';
import { ProductConsumer } from '../../../context';
import SideNavbar from '../../SideNavbar';
import styled from 'styled-components';
import Navbar from '../../Navbar';
import thumbnail1 from '../../../img/thumbnails1.png';
import thumbnail2 from '../../../img/thumbnails2.png';

export default class ByBrand extends Component {

    render() {
        const nameValue = this.props.location.state.value;
        return (
            <ProductConsumer>
                {(value) => {
                    const numberOfItems = () => {
                        let arrItems = 0;
                        for(let i=0; i<value.products.length; i++){
                            if(value.products[i].brand === nameValue){
                                arrItems+=1;
                                console.log(value.products);
                            }};
                            return arrItems;
                    };
                    return(
                        <React.Fragment>
                            <Navbar />
                            <ProductWrapperSmall>
                                <div className="container-fluid">
                                    <Title name={nameValue}/>
                                    <ViewWrapper>
                                        <div className="row">
                                            <div className="col-3 col-lg-2"></div>
                                            <div className="view col-9 col-lg-10 d-flex justify-content-end pt-5">
                                                <div className="itemsNum pr-4">
                                                    {numberOfItems()} Items</div>
                                                <img src={thumbnail2}  alt="large" onClick={() => value.handleView('small')} className="thumbnail"></img>
                                                <img src={thumbnail1}  alt="small" onClick={() => value.handleView('large')} className="thumbnail"></img>
                                            </div>
                                        </div>
                                    </ViewWrapper>
                                </div>
                                <div className="container-fluid pt-3 pb-5">
                                    <div className="row">
                                        <div className="col-3 col-lg-2">
                                            <SideNavbar />
                                        </div>
                                        <div className="products col-9 col-lg-10 d-flex flex-wrap mx-auto">
                                            {value.products.map(item => {
                                                if(nameValue === item.brand){
                                                    return (
                                                        <Product id={item.id} product={item}/>
                                                    )}
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </ProductWrapperSmall>
                        </React.Fragment>
                        )}}
                </ProductConsumer>
            )
        }
    }

const ProductWrapperSmall = styled.div`
    .products.col-9.col-lg-10{
        margin: 0 50px;
        padding: 0 50px;
    }
`

const ViewWrapper = styled.div`
    .view.col-9.col-lg-10{
        padding-right:55px;
    }
    .itemsNum{
        font-weight:500;
    }
    .thumbnail{
        width:15px;
        height:15px;
        padding-bottom:0;
        margin-left:15px;
    } 

`