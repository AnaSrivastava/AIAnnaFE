import React,{ Component } from 'react';
import './LogIn.css';
import 'tachyons';

class LogIn extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      email:'',
      password:''
    }
  }

  onEmailChange=(event)=>{
    this.setState({email:event.target.value});
  }

  onPasswordChange=(event)=>{
    this.setState({password:event.target.value});
  }
  onSubmit=()=>{
    fetch('https://limitless-forest-87695.herokuapp.com/login',{
      method:'post',
      headers:{  'Content-Type':'application/json' },
      body:JSON.stringify({
        email:this.state.email,
        password:this.state.password
      })
    }).then(response=>response.json())
    .then(user=>{
      if(user.name){
        this.props.loadUser(user);
        this.props.onRouteChange('home');
      }
      else{
        window.alert("Invalid EmailID or Password Entered");
      }
    })
  }
  render(){
    const { onRouteChange }=this.props;
    return(
        <main 
        className="br4 ba shadow-5 b--black-20 mv4 w-100 w-50-m w-25-l mw6 center pa2">
  <div className="measure center">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f3 fw6 ph0 mh0">Log In</legend>
      <div className="mt3">
        <label className="db b fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input 
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="email" 
          name="email-address"  
          id="email-address" 
          onChange={ this.onEmailChange }/>
      </div>
      <div className="mv3">
        <label className="db b fw6 lh-copy f6" htmlFor="password">Password</label>
        <input 
          className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="password" 
          name="password"  
          id="password" 
          onChange={  this.onPasswordChange  }/>
      </div>
    </fieldset>
    <div className="">
      <input 
      className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6 dib" 
      type="submit" 
      value="Log In"
      onClick={this.onSubmit} />
    </div>
    <div className="lh-copy mt3">
      <p 
        onClick={()=>onRouteChange('signup')}
        className="f6 link dim black db b underline pointer"
        >New User? Sign up!</p>
    </div>
  </div>
</main>
    );
  } }
export default LogIn;