import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import VanGogh1886 from '../images/VanGogh1886.jpg';
import VanGogh1887 from '../images/VanGogh1887.jpg';
import VanGogh1888 from '../images/VanGogh1888.jpg';
import VanGogh1889 from '../images/VanGogh1889.jpg';
function Cart({basketProps}) {
    console.log(basketProps);

    let productsInCart = [];

     Object.keys(basketProps.products).forEach( function(item) {
         console.log(item);
        console.log(basketProps.products[item].inCart);
        if( basketProps.products[item].inCart){
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart);
    });
       const productImages = [VanGogh1886, VanGogh1887, VanGogh1888, VanGogh1889 ]
       
       productsInCart = productsInCart.map((product, index) => {
        return(
            <Fragment>
              <div className="product"><ion-icon name="close-circle"></ion-icon><img src={productImages[index]} />
                  <span className="sm-hide">{product.name}</span>
              </div>
              <div classname="price sm-hide">${product.price},00</div>
              <div className="quantity">
                <ion-icon className="decrease" name="arrow-back-circle-outline"></ion-icon>
                      <span>{product.numbers}</span>
                <ion-icon className="decrease" name="arrow-forward-circle-outline"></ion-icon>      
              </div>
              <div className="total">${product.numbers * product.price},00</div>
            </Fragment>
        )
    });
    return (
        <div className="container-product">
            <div className="product-header">
             <h5 className="product-title">PRODUCT</h5> 
             <h5 className="price sm-hide">PRICE</h5>
             <h5 className="quantity">QUANTITY</h5>
             <h5 className="total">TOTAL</h5>  
            </div>
           <div className="products">{productsInCart}</div>
           
           <div className="basketTotalContainer">
              <h4 className= "basketTotalTitle">Basket Total</h4>
              <h4 className= "basketTotal">{basketProps.cartCost},00</h4>
           </div>
        </div>
    )
}
const mapStateToProps = state => ({
    basketProps: state.basketState
});
export default connect (mapStateToProps) (Cart);
