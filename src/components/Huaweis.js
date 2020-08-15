import React from 'react';
import './huawei.scss';
import Huawei from './Huawei';

class Huaweis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      huaweis: [
        { name: 'HUAWEI P40 Pro+', price: 7999 },
        { name: 'HUAWEI Mate 30', price: 5000 },
        { name: 'HUAWEI nova 7', price: 4000 },
      ],
    };
  }

  render() {
    return (
      <div className="huaweis">
        <h2>HUAWEI</h2>
        {this.state.huaweis.map((huawei) => (
          <Huawei key={huawei.name} name={huawei.name} price={huawei.price} />
        ))}
      </div>
    );
  }
}

export default Huaweis;
