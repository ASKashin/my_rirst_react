import React from "react";

import './Content2.scss';

const Content2 = () => {

    const name = [
        {
            text: 'Тонкинез',
            id: 1
        },
        {
            text: 'Мэнкс',
            id: 2
        },
        {
            text:'Рагамафин',
            id: 3
        },
        {
            text:'Бирманская кошка',
            id: 4
        }
    ]
    return (
        <section className='Content2'>
            <div className='container'>
                <h2 className='Content2__title'>Породы кошек</h2>
                <ul className='Content2__list'>
                    {name.map(({text,id})=> {
                            return(
                                <li key={id} className={`Content2__item bg${id}`}>
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
