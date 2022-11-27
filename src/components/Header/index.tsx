import React from 'react';
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <img src='./img/logo.svg' alt="logo"/>
            <div className={s.phone}>+7 (495) 495-49-54</div>
        </header>
    );
};