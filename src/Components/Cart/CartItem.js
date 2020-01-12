import React from 'react'

export default function CartItem({ item, value }) {
    const { id, title, price } = item[0];
    const { increment, decrement, removeItem } = value;
    const index = value.cart.indexOf(item);
    const colorItem = value.cart[index][1];
    const { img, colorT, total, count } = colorItem;
    return (
        <div className="row my-2 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img src={img} style={{width:'5rem', height:"8rem"}} className="img-fluid" alt="product" />
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">product : </span>{title}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">price : </span>{price}
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                    <div className="d-flex justify-content-center">
                        <div className="">
                            <span className="btn btn-black mx-1" onClick={() => decrement(colorT)}>-</span>
                            <span className="btn btn-black mx-1">{count}</span>
                            <span className="btn btn-black mx-1" onClick={() => increment(colorT)}>+</span>
                        </div>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <div className="cart-icon" onClick={() => removeItem(id, item)}>
                        <i className="fas fa-trash"></i>
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <strong> item total : $ {total}</strong>
                </div>
        </div>
    )
}

