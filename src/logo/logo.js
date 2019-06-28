import React from 'react';
import './logo.css';
import 'tachyons';
import anna from './xx.jpg';

 const Logo=()=>{
    return(
        <div className="ppp"> 
            <div className="grow">
                <img src={anna} alt=""/>
            </div>  
        </div> 
    );
 }

 export default Logo;