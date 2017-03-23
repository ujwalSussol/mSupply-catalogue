import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import ItemListview from './ItemListview';

class ItemSearch extends Component {
  constructor(props) {
      super(props);
   this.state = {
     searchitemvalue: 'Type a text',
     searchitemoptions:'isnot'
 };
this.Searchnow = this.Searchnow.bind(this);
this.handleChange = this.handleChange.bind(this);

}


 handleChange (name, e) {
      var change = {};
      change[name] = e.target.value;
      this.setState(change);
    }


  Searchnow() {
  alert('Search button clicked item serach: '+this.state.searchitemvalue+' Options : '+this.state.searchitemoptions);
var currentURL ='http://localhost:8080/catalogue/';
var URLparameter ='catalogueItem?type_of#non_stock,item_name='+this.state.searchitemvalue+'@&sortBy=+item_name';
URLparameter = encodeURIComponent(URLparameter);
currentURL = currentURL+URLparameter

alert(currentURL);

var request = new XMLHttpRequest();
  request.open('GET', currentURL, true);
//request.setRequestHeader("Access-Control-Allow-Origin", "*");
//request.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//headers:{authorization:"Basic" + encAuthString}})
//request.setRequestHeader("authorization", "Basic ");
// request.setRequestHeader("X-METHOD", "GET");
request.send(null);

    request.onreadystatechange = function() {
      if(request.readyState === 4) { // done
        if(request.status === 200) { // complete
          //console.log(request.responseText)

      }
    }
}

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
      <button onClick={this.Searchnow}> Search </button>
      </div>
    );
  }
}

export default ItemSearch;
