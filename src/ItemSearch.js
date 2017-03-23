import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import ItemListview from './ItemListview';

class ItemSearch extends Component {
  constructor(props) {
      super(props);
   this.state = {
     searchitemvalue: 'Type a text',
     searchitemoptions:'isnot',
     searchfunc: React.PropTypes.func
 };
this.handleChange = this.handleChange.bind(this);

}


 handleChange (name, e) {
      var change = {};
      change[name] = e.target.value;
      this.setState(change);
    }




  render() {
    return (
      <div>
      <h1> Show items where the item name </h1>
      <select  defaultValue={this.state.searchitemoptions}   onChange={this.handleChange.bind(this, 'searchitemoptions')}>
        <option value="equals">equals</option>
        <option value="starts">starts with</option>
        <option value="isnot">is not equal to</option>
        <option value="doesnot">does not start with</option>
      </select>
      <input type="text" defaultValue={this.state.searchitemvalue} onChange={this.handleChange.bind(this, 'searchitemvalue')}  />
      <button onClick={this.props.searchfunc.bind(this,this.state.searchitemoptions,this.state.searchitemvalue,this.props.action)}> Search </button>
      </div>
    );
  }
}

export default ItemSearch;
