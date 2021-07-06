import React from 'react';
import './Header.css';
import ButtonHeader from './ButtonHeader';

function Header() {
    return (
        <div className = 'header'>
            <h1>Flashcards</h1>

            <div className = 'header__button'>
                <ButtonHeader />
            </div>       

        </div>
    )
}

export default Header
