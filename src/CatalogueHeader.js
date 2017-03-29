import React, { Component } from 'react';

class CatalogueHeader extends Component {

  constructor(props) {
      super(props);
   this.state = {
     homefunc: React.PropTypes.func
 };
}

  render() {
    return (
      <div>
      <h1>
      {this.props.action ==='itemlist' &&
      <button onClick={this.props.homefunc.bind(this)}> Go to serach </button>
    }
      mSupply online Catalogue

     </h1>

      </div>
    );
  }
}

export default CatalogueHeader;
