import React from "react";

import './Content2.scss';

const Content2 = () => {

    const name = [
        {
            text: 'Тонкинез'
        },
        {
            text: 'Мэнкс'
        },
        {
            text:'Рагамафин'
        },
        {
            text:'Бирманская кошка'
        }
    ]
    return (
        <section className='Content2'>
            <div className='container'>
                <h2 className='Content2__title'>Породы кошек</h2>
                <ul className='Content2__list'>
                    {name.map(({text})=> {
                            return(
                                <li key={name} className='Content2__item bg1'>
                                    <p className='Content2__item-text'>{text}</p>
                                    <button className='Content2__item-button'>Подробнее</button>
                                </li>
                            )
                        })}
                </ul>
            </div>
        </section>
    )
};

export default Content2;
