import React from 'react';
import s from './UpSection.module.css'

export const UpSection = () => {
    return (
        <section className={s.container}>
            <div className={s.article}>
                <div className={s.firstImg}></div>
                <article className={s.articleContainer}>
                    <p className={s.header}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <p className={s.title}>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </article>
            </div>
            <div className={s.article}>
                <article className={s.articleContainer}>
                    <p className={s.header}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <p className={s.title}>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </article>
                <div className={s.secondImg}></div>
            </div>
        </section>
    );
};