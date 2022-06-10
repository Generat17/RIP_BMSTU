import React from 'react';
import {Link} from "react-router-dom";

const css = `
    .header {
        background: #abf2ec;
        height: 60px;
        padding-top: 1px;
    }
    
    .nav-link {
        color: black;
        text-decoration: none;
        font-size: 25px;
    }
    .nav-link:hover {
        color: blue;
        text-decoration: none;
        font-size: 25px;
    }
    
    .nav-item {
        display: inline;
        margin-right: 5px;
        padding: 3px;
    }
`


const Header = () => {
    return (
        <nav>
            <style>{css}</style>
            <div className="header">
                <ul>
                    <li className="nav-item"><Link className="nav-link" to='/'>Главная</Link></li>
                    <li className="nav-item"><Link className="nav-link" to='/products'>Продукты</Link></li>
                    <li className="nav-item"><Link className="nav-link" to='/companys'>Компании</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;