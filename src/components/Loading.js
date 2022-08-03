import React from 'react';
import Loadingimg from '../assets/loading.gif'
const Loading = () => {
    return (
        <div>
            <img src={Loadingimg} alt='' style={{width:'30px',height:'30px'}}/>
        </div>
    );
}

export default Loading;
