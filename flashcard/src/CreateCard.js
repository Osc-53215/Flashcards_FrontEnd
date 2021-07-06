import React from 'react';
import './CreateCard.css';

function CreateCard() {
    return (
        <>
        <div className = 'createcards'>
            <h2>Create Flashacards</h2>
        </div>

        <div className = 'creatcards__label'>
            <label for = 'question'>Questions</label>
            <textarea name = '' id = '' cols = '30' rows = '10' />
        </div>
        </>
    )
}

export default CreateCard
