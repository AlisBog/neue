
import React, { Component } from 'react';
import SlideItem from './SlideItem';

export default class Slide extends Component {

    mapItems = () => {

        const { productType } = this.props;
        const { value } = this.props;
        const productsArray =value.products;
        const matchedItems = [];

        const productKeys = {};
        productType.forEach(key => { productKeys[key] = key });
        
        productsArray.forEach((product, i) => {
            const productTypes = product.product;
            for (let j = 0; j < productTypes.length; j++) {
                const selectedProductType = productTypes[j];
                if (productKeys[selectedProductType]) {
                    matchedItems.push(
                    <div >                         
                        <div className="col-2">
                            <SlideItem productIndex={i} productType={this.props.productType} value={this.props.value}/>

                        </div>
                    </div>
                    );
                break;
                }
            }
        })
        return matchedItems;
    }


    render() {
      return(
        <div className="container">
          <div className="row justify-content-center">
          <div className="col-10"> 
          <h6 className="text-muted text-title">Similar items</h6>
          <div id="carouselExampleIndicators" className="carousel slide mt-2" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row justify-content-center">
                  {this.mapItems()}
                </div>
              </div>
              <div className="carousel-item">
                <div className="row justify-content-center">
                  {this.mapItems()}
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          </div> 
          </div>
        </div>
      )
    }
  }


