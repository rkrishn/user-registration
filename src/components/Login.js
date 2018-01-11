import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
class Login extends React.Component {

  constructor(props){
    super(props);
    this.state={};
    alert()
  }
  render() {
    console.log(this.props)
      console.log(this.state)
      return (
        <div>
         <h2>Login Form</h2>
            <form action="/action_page.php">
            <div className="imgcontainer">
                <img src="static/images/img_avatar2.png" alt="Avatar" className="avatar"></img>
            </div>
            <div className="container">
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />

                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
                    
                <button type="submit">Login</button>
                <input type="checkbox" checked="checked" /> Remember me
            </div>
            <div className="container" style={{backgroundColor: '#f1f1f1'}}>
                <button type="button" className="cancelbtn">Cancel</button>
                <span className="psw"> <a href="#">Forgot password?</a></span>
            </div>
            </form>
        </div>
      );
    }
  }

  export default connect(
    state => ({bok: state}),
    dispatch => bindActionCreators()
  )(Login)