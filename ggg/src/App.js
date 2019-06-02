import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ListItem from './listItem';
import Ncbp from './ncbp';
import List from './List';
import TextBox from './TextBox'
import  SimpleList from './SimpleList'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {currencies: []};
  }


render() {
  return (
      <div className="App">
        <form>
          <TextBox/>
          <input type= 'submit'/>
        </form>
      </div>
  );
}


}

export default App;
