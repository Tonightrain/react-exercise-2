import React from 'react';
import './phone.scss';
import product_image_placeholder from '../assets/product_image_placeholder.png';

class Phone extends React.Component {
  render() {
    return (
      <div className="phone">
        <h3>{this.props.name}</h3>
        <img src={product_image_placeholder} alt="phone" />
        <p>{this.props.price}</p>
        <button className="add" onClick={this.props.add}>
          add to cart
        </button>
      </div>
    );
  }
}

export default Phone;
