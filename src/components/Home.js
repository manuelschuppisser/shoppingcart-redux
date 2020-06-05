import React from 'react';
import VanGogh1886 from '../images/VanGogh1886.jpg';
import VanGogh1887 from '../images/VanGogh1887.jpg';
import VanGogh1888 from '../images/VanGogh1888.jpg';
import VanGogh1889 from '../images/VanGogh1889.jpg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';
const Home = (props)=> {
    console.log(props);
    return(
<div className="container">
        <div className="image">
        <a onClick={props.addBasket} href="#" className="AdToCart cart1" >Add to Cart</a>
        <img src={VanGogh1886} alt="Van Gogh,1885"/>
        <h3> Vincent Van Gogh, 1885, Huile sur toile</h3>
        <h3>$1.660 548 584</h3>
        </div>

        <div className="image">
        <a onClick={props.addBasket} href="#" className="AdToCart cart2">Add to Cart</a>
        <img src={VanGogh1887} alt="Van Gogh,1887"/>
        <h3> Vincent Van Gogh, 1885, Huile sur toile</h3>
        <h3>$1.993 548 101</h3>
        </div>

        <div className="image">
        <a onClick={props.addBasket} href="#" className="AdToCart cart3">Add to Cart</a>
        <img src={VanGogh1888} alt="Van Gogh,1888"/>
        <h3> Vincent Van Gogh, 1885, Huile sur toile</h3>
        <h3>$3.620 548 978</h3>
        </div>

        <div className="image">
        <a onClick={props.addBasket} href="#" className="AdToCart cart4">Add to Cart</a>
        <img src={VanGogh1889} alt="Van Gogh,1889"/>
        <h3> Vincent Van Gogh, 1885, Huile sur toile</h3>
        <h3>$1.560 548 221</h3>
        </div>
</div>
    )
}
export default connect(null, {addBasket}) (Home);