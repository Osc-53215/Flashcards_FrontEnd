import React from 'react';
import './Header.css';
import Button from './Button';

function Header() {
    return (
        <div className = 'header'>
            <h1>Flashcards</h1>
            
            <div className = 'header__button'>
                <Button />
            </div>       

        </div>
    )
}

export default Header
