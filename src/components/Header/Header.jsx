import React from "react";
import './Header.scss'

const Header = () => {
    const menu = [
        {
            link: '/',
            name: 'Home'
        },
        {
            link: '/about',
            name: 'About us'
        },
        {
            link: '/products',
            name: 'Products'
        },
        {
            link: '/contacts',
            name: 'Contacts'
        },
    ]


    return (
        <header className='Header'>
            <div className='container'>
                <div className='Header__logo'>React</div>
                <nav>
                    <ul className='Header__list'>
                        {menu.map(({link,name})=>{
                            return(
                                <li key={name} className='Header__item'>
                                    <a className='Header__item-link' href={link}>{name}</a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <div className='Header__search'>
                    <input className='Header__search-input' type="text" placeholder='Введите текст...'/>
                    <button className='Header__search-button'>Search</button>
                </div>
            </div>
        </header>


    )
};

export default Header;