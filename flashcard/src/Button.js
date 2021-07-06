import React from 'react'

function Button() {
    return (
        <div className = 'button'>

            <div className = 'button__new'>
                <button>New Card</button>
            </div>

            <div className = 'button__del'>
                <button>Delet Card</button>
            </div>
            
        </div>
    )
}

export default Button
