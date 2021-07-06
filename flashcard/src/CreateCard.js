import React from 'react';
import './CreateCard.css';
import ButtonBody from './ButtonBody';

function CreateCard() {
    return (
        <>
        <div className = 'createcards'>
            <h2>Create Flashacards</h2>
        </div>

        <div className = 'creatcards__label'>
            <label for = 'question'>Questions</label>
            <textarea id = 'question'/>
            <br/>
            <label for = 'answer'>Answer</label>
            <textarea id = 'answer'/>
        </div>

            <ButtonBody />

        <div className = 'createcards__flashcards'>

        </div>
        </>
    )
}

export default CreateCard
