import React from 'react';
import './phone.scss';
import Phone from './Phone';

class Phones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iphones: [
        { name: 'iPhone11', price: '￥5999' },
        { name: 'iPhoneXS', price: '￥5399' },
        { name: 'iPhoneSE', price: '￥3599' },
      ],
    };
  }

  render() {
    return (
      <div className="products">
        <h2>iPhone</h2>
        {this.state.iphones.map((iphone) => (
          <Phone key={iphone.name} name={iphone.name} price={iphone.price} />
        ))}
      </div>
    );
  }
}

export default Phones;
