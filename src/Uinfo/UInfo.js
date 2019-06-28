import React from 'react';
import 'tachyons';

const UInfo=({name,entries})=>{
    return(
        <div>
            <div className="f2 navy">
                {`${name} , you have visited ${entries} times!`}
            </div>
        </div>
    );
}

export default UInfo;