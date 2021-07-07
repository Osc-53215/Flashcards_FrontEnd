import React from 'react';
import './ButtonHeader.css';

function Button() {

    return (
        <div className = 'buttonheader'>

            <button onClick = 'showCreateCardBox()'>New Card</button>
            <button onClick = 'delFlashCards()'>Delete Card</button>
            
        </div>
    )
}

export default Button
