import React, { Component } from 'react';
import CatalogueHeader from './CatalogueHeader';
import ItemSearch from './ItemSearch';
import ItemListView from './ItemListView';


class App extends Component {

  constructor(props) {
      super(props);
   this.state = {
     Display: 'load',
 };
 }

 render() {

  // alert('Page load : '+this.state.Display);

   return (

     <div>

 {this.state.Display ==='load' &&
 <div>
  <CatalogueHeader action={this.state.Display} />
  <ItemSearch />
   </div>
}

{this.state.Display ==='itemlist' &&
<div>
 <CatalogueHeader action={this.state.Display} />
  <ItemListView />
  </div>
}

</div>


   );
 }
 }






export default App;
