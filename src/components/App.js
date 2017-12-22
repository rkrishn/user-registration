import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);
    //if(window)
    //alert('constructor')
    this.state={
      helloText:"Hello",
      colorVal:"ff0000",
      inputVal:'Hello'
    };
  }
//   componentWillReceiveProps(nextProps){
//     if(window)
//     alert('componentWillReceiveProps');
//   }
//   componentWillMount(){
//     if(window)
//     alert('componentWillMount');
//   }
//   componentDidMount(){
//     if(window)
//     alert('componentDidMount');
//   }
//   shouldComponentUpdate(nextProps,nextState){
//     if(nextState !== this.state){
//       return true;
//     }else{
//       return false;
//     }
//     if(window)
//     alert('shouldComponentUpdate');
//   }
//   componentWillUpdate(nextProps,nextState){
//     if(window)
//     alert('componentWillUpdate');
//   }
//   componentDidUpdate(prevProps, prevState){
//     if(window)
//     alert('componentDidUpdate');
//   }
//   force = () =>{
//     this.forceUpdate();
//   }
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
    //if(window)
   // alert('render')
      return (
        <div>
          <input type='text' value={this.state.inputVal} onChange={this.onChange} placeholder={this.state.helloText} />
          <h1 onClick={this.force}>{this.state.helloText}, {this.props.data.text}</h1>
          <input type='color' onChange={this.onColorChange} value={this.state.colorVal}/>
        </div>
      );
    }
  }

export default App;