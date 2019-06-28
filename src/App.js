import React,{Component} from 'react';
import './App.css';
import Logo from './logo/logo.js'
import Nav from './Nav/Nav.js';
import LogIn from './LogIn/LogIn.js';
import Form from './Form/Form.js';
import SignUp from './SignUp/SignUp.js';
import UInfo from './Uinfo/UInfo';
import Particles from 'particlesjs';

window.onload = function() {
  Particles.init({
    selector: '.background',
    color: ['#DA0463', '#800000', '#191970'],
    connectParticles: true,
    maxParticles:250
  });
};
const initialState={
  route:'login',
  user:{
   name:'',
   entries:0,
   joined: ''
       }  };

class App extends Component {
    constructor()
    {
      super();
       this.state=initialState;
    }

    loadUser=(data)=>{
      this.setState({
        user:{
          name:data.name,
          entries:data.entries,
          joined: data.joined
              }
      })
    }


    onRouteChange=(route)=>{
      if(route==='login')
      {
        this.setState(initialState);
      }
      this.setState({route:route});
    }
   render(){
  return (
    <div className="App">
        <canvas className="background"></canvas> 
        {this.state.route==='login'
        ?  <LogIn onRouteChange={this.onRouteChange} loadUser={ this.loadUser }/>
         :
        (this.state.route==='signup'
        ? <SignUp onRouteChange={  this.onRouteChange  } />
        :
        <div> {/* 'home' */}
          <Nav onRouteChange={this.onRouteChange} />
          <Logo />  
          <UInfo name={ this.state.user.name } entries={this.state.user.entries}/>
          <Form />
        </div>
           )  }
    </div> 
    );
      } }
export default App;
