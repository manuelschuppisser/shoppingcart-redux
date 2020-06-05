import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {getNumbers} from '../actions/getAction';
import {Link} from 'react-router-dom';
function Navbar(props) {
  console.log(props);

  useEffect(() => {
    getNumbers();
  },[]);
    return (
        <header>
     <div className="overlay"></div>
     <nav>
       <h2 className="shop">Shop</h2>
       <ul className="buttongroup">
         <li className="Home"><Link className="button" to="/">Home</Link></li>
         <li className="About"><Link className="button" to="/about">About</Link></li>
         <li className="cart"><Link className="button" to="/cart">
           <ion-icon name="cart-outline"></ion-icon>Cart<span>&nbsp;{props.basketProps.basketNumbers}</span></Link></li>
       </ul>
     </nav>
   </header>
    );
}
const mapStateToProps = state => ({
  basketProps: state.basketState
})
export default connect(mapStateToProps,{getNumbers})(Navbar);