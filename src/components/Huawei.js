import React from 'react';
import './huawei.scss';
import product_image_placeholder from '../assets/product_image_placeholder.png';

class Huawei extends React.Component {
  render() {
    return (
      <div className="huawei">
        <h3>{this.props.name}</h3>
        <img src={product_image_placeholder} alt="huawei" />
        <p>{this.props.price}</p>
        <button className="add" onClick={this.props.add}>
          add to cart
        </button>
      </div>
    );
  }
}
export default Huawei;
