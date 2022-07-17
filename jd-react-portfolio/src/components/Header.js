import React from 'react';

export default function Header() {
    return (
        <div>
            <header>
                <img
                    src="./assets/images/selfie.jpg"
                    alt="ramdom picture of people"
                    class="selfie"
                />
                <h1>Hi, I'm Jessie Doherty. I live in Memphis, TN.</h1>
                <button class="headerButton" id="headerBtn">
                    <a href="mailto:zhuzhu93028@gmail.com"
                    >Please feel free to contact me!</a>
                </button>
            </header>
        </div>    
    )
}