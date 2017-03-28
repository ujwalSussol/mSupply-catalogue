import React, { Component } from 'react';

class ItemListView extends Component {

  constructor(props) {
      super(props);
   this.state = {
     itemarry: this.props.itemlistdata,
  };
  }


  render() {
    console.log('Item list data :'+this.state.itemarry)

    return (
      <div>
      <h1> We will have our item list here</h1>
    <table>
    <tbody>

{this.state.itemarry.map((item) => <tr key={item.id}><td>{item.item_name}</td></tr>)}
</tbody>
</table>

      </div>
    );
  }
}

export default ItemListView;
