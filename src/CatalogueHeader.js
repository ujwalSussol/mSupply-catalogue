import React, { Component } from 'react';

class CatalogueHeader extends Component {

  constructor(props) {
      super(props);
   this.state = {
 };
this.GoToItemSearch = this.GoToItemSearch.bind(this);
}

  GoToItemSearch() {

  }



  render() {
    return (
      <div>
      <h1>
      {this.props.action ==='itemlist' &&
      <button onClick={this.GoToItemSearch}> Go to serach </button>
    }

      mSupply online Catalogue

     </h1>

      </div>
    );
  }
}

export default CatalogueHeader;
