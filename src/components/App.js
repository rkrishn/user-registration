import React from 'react';
import Login from './Login';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      helloText:"Hello",
      colorVal:"ff0000",
      inputVal:'Hello'
    };
  }

 onChange=(e)=>{
    this.setState({
      inputVal:e.target.value,
      helloText:e.target.value
    });
  }

  onColorChange=(e)=>{
    document.querySelectorAll("body")[0].style.backgroundColor = e.target.value;
    this.setState({
      colorVal:e.target.value
    });
  }



  render() {
      return (
        <div>
          <Login/>
        </div>
      );
    }
  }

export default App;