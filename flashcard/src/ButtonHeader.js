import React from 'react';
import './ButtonHeader.css';

function Button() {

    function delFlashcards(){
        db.collection.remove();
        flashcards.innerHTML = '';
        contentArray = [];
    }


    return (
        <div className = 'buttonheader'>

            <button onClick = 'showCreateCardBox()'>New Card</button>
            <button onClick = 'delFlashCards()'>Delete Card</button>
            
        </div>
    )
}

export default Button
