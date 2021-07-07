import React from 'react';
import './ButtonHeader.css';


function Button(props) {
    
    // const decks = props.data;

    return (


        
        <div className = 'buttonheader'>

            
             
             <div>

                <button onClick = 'showCreateCardBox()'>New Card</button>
                <button /*onClick = {() => props.callDeleteDeck(deck._id)}*/>Delete Card</button> 

            </div>
             
           
            
            
        </div>
    )
}

export default Button
