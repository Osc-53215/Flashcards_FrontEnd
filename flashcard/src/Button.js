import React from 'react';

function Button() {
    return (
        <div className = 'button'>

            <button onClick = 'showCreateCardBox()'>New Card</button>
            <button onClick = 'delFlashCards()'>Delete Card</button>
            
        </div>
    )
}

export default Button
