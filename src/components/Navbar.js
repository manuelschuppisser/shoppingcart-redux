import React from 'react';

function Navbar() {
    return (
        <header>
     <div className="overlay"></div>
     <nav>
       <h2 className="shop">Shop</h2>
       <ul className="buttongroup">
         <li className="button"><a href="#"></a>Home</li>
         <li className="button"><a href="#"></a>About</li>
         <li className="cart"><a href="#"></a><ion-icon name="cart-outline"></ion-icon>Cart<span>&nbsp; 0</span></li>
       </ul>
     </nav>
   </header>
    );
}
export default Navbar;