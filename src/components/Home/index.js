import React, { Component } from 'react';
import FormValidator from '../FormValidator/FormValidator.js';
class Home extends Component{
   render(){
     return(
        <div>
           <h1>Home</h1>
           <FormValidator />
        </div>
     );
   }
}
export default Home;
