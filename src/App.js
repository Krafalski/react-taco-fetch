import React, { Component } from 'react';
import './App.css';

class ListItem extends React.Component{
  render(){
    return (
      <div>
         <h2><span>Shell: </span>{this.props.shell.name}</h2>
         <p>{this.props.shell.recipe}</p>
         <h2><span>Mixin: </span> {this.props.mixin.name}</h2>
         <p>{this.props.mixin.recipe}</p>
         <h2><span>Condiment: </span> {this.props.condiment.name}</h2>
         <p>{this.props.condiment.recipe}</p>
         <h2><span>Seasoning: </span> {this.props.seasoning.name}</h2>
         <p>{this.props.seasoning.recipe}</p>
       </div>)
  }
}

class Main extends Component {
    state = {
      tacos: []
    }

  componentDidMount(){
    fetch('http://taco-randomizer.herokuapp.com/random/?full-tack=true')
      .then(response => response.json())
      .then(data => {
        this.setState(
          {
            tacos: [data]
          }
        )
      })
    }

  render(){
    return(
      <main>
        <h1>{this.props.title}</h1>
        <ul>
         {this.state.tacos.map((taco, index) => <ListItem key={index}
         shell={taco.shell}
         mixin={taco.mixin}
         seasoning={taco.seasoning}
         condiment={taco.condiment}
         baselayer={taco.base_layer}

         ></ListItem>
         )}
        </ul>
      </main>
    )
  }
}



class App extends Component {
  state = {
    title: 'Random Taco!'
  }
  render() {
    return (
      <div className="App">
      <Main title={this.state.title}/>
      </div>
    );
  }
}

export default App;
