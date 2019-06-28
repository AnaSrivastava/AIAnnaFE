import  React from 'react';
import './Nav.css';
import 'tachyons';

const Nav=({ onRouteChange})=>{
          return(
            <nav className ="f3 underline">
           <p 
            className="ph3 pointer"
            onClick={()=>onRouteChange('login')}
           >Log Out</p>
            </nav> ); 
}
export default Nav;