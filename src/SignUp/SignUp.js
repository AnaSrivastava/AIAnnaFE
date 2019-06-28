import React from 'react';
import 'tachyons';
import './SignUp.css';

class SignUp extends React.Component{
    constructor(props){
      super(props);
      this.state={
        name:'',
        email:'',
        password:''
      }
    }
    onNameChange=(event)=>{
      this.setState({name:event.target.value});
    }
    onEmailChange=(event)=>{
      this.setState({email:event.target.value});
    }
    onPasswordChange=(event)=>{
      this.setState({password:event.target.value});
    }
    
  onSubmit=()=>{
    fetch('https://limitless-forest-87695.herokuapp.com/signup',{
      method:'post',
      headers:{  'Content-Type':'application/json' },
      body:JSON.stringify({
        name:this.state.name,
        email:this.state.email,
        password:this.state.password
      })
    }).then(response=>response.json())
    .then(data=>{
      if(data==="WOOHOO"){
        window.alert("You have successfully signed up! Try to login now");
        this.props.onRouteChange('login');
      }
    })
  }
    render(){
    return(
<article className="br4 ba shadow-5 b--black-20 mv4 w-100 w-50-m w-25-l mw6 center pa2">
  <div action="sign-up_submit" method="get" acceptCharset="utf-8">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <div className="mt3 ">
      <p className="ph0 mh0 f3 b">Sign Up</p>
      <label className="b db fw4 lh-copy f6 " htmlFor="email-address">
            Name</label>
     <input 
        className="pa2 input-reset ba bg-transparent w-100 measure hover-bg-black hover-white" 
        type="text" 
        name="name"  
        id="name" 
        onInput={  this.onNameChange }/>
        <label 
            className="db fw4 lh-copy f6 b" 
            htmlFor="email-address">
            Email address</label>
      <input 
          className="pa2 input-reset ba bg-transparent w-100 measure hover-bg-black hover-white" 
          type="email" 
          name="email-address"  
          id="email-address" 
          onChange={this.onEmailChange}/>
      </div>
      <div className="mt3">
        <label className="db fw4 lh-copy b f6" htmlFor="password">Password</label>
        <input 
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white" 
            type="password" 
            name="password"  
            id="password" 
            onChange={this.onPasswordChange}/>
        <input 
          className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f6" 
          type="submit" 
          value="Sign Up"
          onClick={  this.onSubmit  }
          />
      </div>
    </fieldset>
    <div className="mt3">
        {/*  */}
    </div>
  </div>
</article>

    );
} }

export default SignUp;