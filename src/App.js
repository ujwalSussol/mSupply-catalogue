import React, { Component } from 'react';
import CatalogueHeader from './CatalogueHeader';
import ItemSearch from './ItemSearch';
import ItemListView from './ItemListView';


class App extends Component {

  constructor(props) {
      super(props);
   this.state = {
     Display: 'load',
     itemdata: []
 };

 this.Searchnow = this.Searchnow.bind(this);
 this.GoToHome = this.GoToHome.bind(this);


 }

 GoToHome() {
   this.setState({ Display: 'load'});
 }

 Searchnow(searchcomp,searchvalue,action) {
 alert('Search button clicked item serach: '+searchvalue+' Options : '+searchcomp+' Action :'+action);
 //Note for this self learning project, I am just doing one type of query.
var currentURL ='http://localhost:8080/catalogue/';
var URLparameter ='catalogueItem?type_of#non_stock,item_name='+searchvalue+'@&sortBy=+item_name';
URLparameter = encodeURIComponent(URLparameter); //Need to do this so that the URL appears in the right format
currentURL = currentURL+URLparameter

//alert(currentURL);

var request = new XMLHttpRequest();
 request.open('GET', currentURL, true);
//request.setRequestHeader("Access-Control-Allow-Origin", "*");
//request.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//headers:{authorization:"Basic" + encAuthString}})
//request.setRequestHeader("authorization", "Basic ");
// request.setRequestHeader("X-METHOD", "GET");
request.send(null);

   request.onreadystatechange = () => {
     if(request.readyState === 4) { // done
       if(request.status === 200) { // complete
      console.log(request.responseText)
  //  var myArr = JSON.parse(request.responseText);
      var myArr = JSON.parse(request.responseText);

      //console.log('Ujwal log :'+myArr)

         this.setState({
           Display: 'itemlist',
           itemdata: myArr,
         });
      //   alert('App state : '+this.state.Display);
     }
   }
}

 }


 render() {

//alert('App Render : '+this.state.Display);

   return (

     <div>

 {this.state.Display ==='load' &&
 <div>
  <CatalogueHeader homefunc={this.GoToHome} action={this.state.Display} />
  <ItemSearch searchfunc={this.Searchnow}  action={this.state.Display} />
   </div>
}

{this.state.Display ==='itemlist' &&
<div>
 <CatalogueHeader homefunc={this.GoToHome} action={this.state.Display} />
  <ItemListView itemlistdata={this.state.itemdata}/>
  </div>
}

</div>


   );
 }
 }






export default App;
