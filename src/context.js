import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {

    state = {
        products: [],
        detailProduct: detailProduct,
        detailColor: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        modalColor: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        view: false,
        favorites: [],
    };

    componentDidMount() {
        this.setProducts();
    };

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return { products : tempProducts }
        })
    };

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };

    getColorIndex = (product, colorT) => {
        console.log("this is Product from getColorIndex : ");
        console.log(product);
        const index = product.variant.findIndex(item => item.colorT === colorT);
        console.log("this is Index from getColorIndex : ");
        console.log(index);
        return index;
    }

    handleDetail = (id, colorT) => {
        const product = this.getItem(id);
        console.log("this is Product from handleDetail : ");
        console.log(product);
        const index = this.getColorIndex(product, colorT);
        this.setState(() => { 
            return { 
                detailProduct : product,
                detailColor : product.variant[index]     
            }
        })
    };

    addToCart = (id, colorT) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        const colorIndex = this.getColorIndex(product, colorT);
        const chosenItem = product.variant[colorIndex];
        chosenItem.inCart = true;
        chosenItem.count = 1;
        const price = product.price;
        chosenItem.total = price;
        this.setState(() => {
            return  { 
                        products : tempProducts, 
                        cart : [...this.state.cart, [product, chosenItem]] 
                    };
        },
        () => {
            this.addTotals();
        });
    };

    openModal = (id, colorT) => {
        const product = this.getItem(id);
        const index = this.getColorIndex(product, colorT);
        this.setState(() => {
            return {
                modalProduct: product,
                modalColor: product.variant[index],
                modalOpen: true
            };
        })
    };

    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false};
        })
    };

    increment = (colorT) => {
        let tempCart = [...this.state.cart];

        const selectedProduct = tempCart.find(item => item[1].colorT === colorT);

        console.log(selectedProduct);

        selectedProduct[1].count += 1;
        selectedProduct[1].total += selectedProduct[0].price;

        this.setState({
            cart : [...tempCart]
        },
        () => {
            this.addTotals();
        })
    };

    decrement = (colorT) => {
        let tempCart = [...this.state.cart];
        
        const selectedProduct = tempCart.find(item => item[1].colorT === colorT);

        if(selectedProduct[1].count > 1){
            selectedProduct[1].count -= 1;
            selectedProduct[1].total -= selectedProduct[0].price;
            this.setState({
                cart : [...tempCart]
            },
            () => {
                this.addTotals();
            })
        } else {
            this.removeItem(selectedProduct);
        }

    };

    removeItem = (removedProduct) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        const { colorT } = removedProduct[1];

        removedProduct[1].inCart = false;
        removedProduct[1].count = 0;
        removedProduct[1].total = 0;

        tempCart = tempCart.filter(item => item[1].colorT !== colorT);

        this.setState(() => {
            return {
                cart : [...tempCart],
                products : [...tempProducts]
            }
        },
        () => {
            this.addTotals();
        })
    };

    clearCart = () => {
        this.setState(() => {
            return { cart : []}
        }, () => {
            this.setProducts()
        });
    };

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item =>{
            return subTotal += item[1].total;
        });
        const tempTax = 0.1 * subTotal;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal : subTotal,
                cartTax : tax,
                cartTotal : total
            }
        })
    };

    handleView = (size) => {
        if(size === 'small'){
            this.setState(() => {
                return {
                    view: true
                }
            })
        } else {
            this.setState(() => {
                return {
                    view: false
                }
            })
        }
    };

    addToFavorites = (id, colorT) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        const colorIndex = this.getColorIndex(product, colorT);
        const chosenItem = product.variant[colorIndex];
        if(chosenItem.isFavorite){
            chosenItem.isFavorite = false;
            let tempFavorites = [...this.state.favorites];
            console.log(tempFavorites);
            tempFavorites = tempFavorites.filter(item => item[1].colorT !== colorT && item[0].id !== id);
            console.log(tempFavorites);
            this.setState(() => {
                return  { 
                            products : tempProducts, 
                            favorites : [...tempFavorites] 
                        };
            }, () => {
                this.setProducts()
            });
        }else {
            chosenItem.isFavorite = true;
            this.setState(() => {
                return  { 
                            products : tempProducts, 
                            favorites : [...this.state.favorites, [product, chosenItem]] 
                        };
            }, () => {
                this.setProducts()
            });
        };
    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                handleColorDetail: this.handleColorDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                handleView: this.handleView,
                addToFavorites: this.addToFavorites,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    };
};


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
