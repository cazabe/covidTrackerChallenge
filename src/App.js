import React, { Component } from 'react';
import Global from './components/Global/Global'
import Country from './components/Country/Country'
import SearchBox from './components/SearchBox/SearchBox'
import Scroll from './components/Scroll/Scroll'

import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      global:{},
      dateNow:'',
      country:[],
    }
  }

dataFecht = async() => {
  try{
    const response = await fetch('https://api.covid19api.com/summary')
    const data = await response.json();
    return data
  }catch(error){
    console.log(error)
  }
}

dateTransform = ()=>{
    const date = new Date()
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();
    let fullDate = year + "/" + month + "/" + day;
    this.setState({dateNow :fullDate })
}



  async componentDidMount(){
    const {Global ,Countries } = await this.dataFecht();
    this.setState({global : Global})
    this.setState({country :Countries})
    this.dateTransform()
  }
  
  render(){
    return (
      <div className="container text-center">
       <h1>Covid tracker</h1>
       <Global global={this.state.global} date={this.state.dateNow}/>
       <h1>Buscador</h1>
       <SearchBox SearchChange={this.onSearchChange}/>
       <Scroll>
       <Country key={this.state.country.Countries} country={this.state.country}/>
       </Scroll>
      </div>
    );
  }
}

export default App;
