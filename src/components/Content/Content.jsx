import React from "react";
import './Content.scss'
import cat1 from "./images/cat1.png";
import cat2 from "./images/cat2.png";
import cat3 from "./images/cat3.png";

const Content = () =>{
    const cats = [
        {
            img: cat1,
            text: 'Британские кошки  круты'

        },
        {
            img: cat2,
            text: 'Британские кошки нереально крутые'

        },
        {
            img: cat3,
            text: 'Британские кошки фантастически  круты'

        }
    ]
    return (
        <section className='Content'>
            <div className='container'>
                <h1 className='Content__title'>Самый крутой контент про кошек на свете</h1>
                <ul className='Content__list'>
                    {cats.map(({img,text})=>{
                        return (
                            <li key={img} className='Content__item'>
                                <img className='Content__item-img' src={img} alt=""/>
                                <p className='Content__item-text'>{text}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
};

export default Content;