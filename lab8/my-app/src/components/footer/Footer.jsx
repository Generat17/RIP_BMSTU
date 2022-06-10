import React from 'react';

const css = `
    footer {
        padding-top: 20px;
        padding-left: 50px;
        height: 100px;
        background: #99ff77;
    }
`

const Footer = () => {
    return (
        <footer>
            <style>{css}</style>
            <div>
                <h4>
                    Сайт разработал<br></br>
                    Студент группы РТ5-51Б<br></br>
                    Алиев Тимур
                </h4>
            </div>
        </footer>
    );
};

export default Footer;