import React, { Component } from 'react';

class ItemListView extends Component {

  constructor(props) {
      super(props);
   this.state = {
     itemarry: this.props.itemlistdata,
  };
  }


  render() {

    return (
      <div>
      <h1> We will have our item list here</h1>
    <table>
    <thead>
        <tr>
        <td>Category</td>
        <td>Code</td>
        <td>Item Name</td>
        <td>Unit of issue</td>
        <td>Packsize</td>
        <td>Cost</td>
        </tr>
      </thead>
    <tbody>

{this.state.itemarry.map((item) => <tr key={item.id}>
<td>{item.description}</td>
<td>{item.code}</td>
<td>{item.item_name}</td>
<td>{item.units}</td>
<td>{item.default_pack_size}</td>
<td>{item.indic_price}</td>
 </tr>)}
</tbody>
</table>

      </div>
    );
  }
}

export default ItemListView;
