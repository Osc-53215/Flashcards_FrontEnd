import React from 'react';
import './ButtonBody.css'

function ButtonBody() {
    return (
        <div className = 'buttonbody'>

            <button onClick = 'addFlashcard()'>Save</button>
            <button onClick = 'hideCreatBoxFlashCards()'>Close</button>

        </div>
    )
}

export default ButtonBody
