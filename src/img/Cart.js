import React from 'react'
import { useCart } from "react-use-cart";

const Cart = () => {
    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        removeItem,
        emptyCart,

        
        
    } = useCart();
    if(isEmpty) return <h1 className="text-center">your cart is empty</h1>

    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                <h5>Cart (totalUniqueItems]) total Items: ({totalItems}) </h5> 
                <table className="table table-light table-hover m-0"> 
                {items.map((item, index)=>
                { 
                <tr key={index}> 
                <td>
                <img src={item.img } style={{height: '6rem'}} /> 
                </td> 
                <td>{item.price} </td>
                <td>{item.title}</td>
                 <td>Quantity ({item.quantity})</td>
                 </tr>
                })}
                </table>



                </div>
            </div>
        </section>
        
    );
};

export default Cart;