import React from 'react'

const Settings = ({returnHome}) =>{
    return (
        <div>
            <button onClick={() => returnHome('Homepage')}>Back</button>
        </div>
    );

}

export default Settings;