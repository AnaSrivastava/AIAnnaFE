import React from 'react';
import './Form.css';
import 'tachyons';

const Form=({onInputChange,onAF})=>{
    return(
        <div className="FF br4 ba b--black shadow-5 zz center">
            <p className="f3 center ">This XXX will do YYY</p>
            <div className="pa2">
            <input type="text" className="bg-light-yellow" onChange={onInputChange}/>
            <button className="bg-yellow b--gold link" onClick={onAF}>Apply</button>
            </div>
        </div>
    );
}

export default Form;