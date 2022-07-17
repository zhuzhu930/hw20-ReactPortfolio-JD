import React from 'react';
import '../styles/style.css';

export default function Footer() {
    return (
        <div>
            <footer>
                <ul>
                    <li>
                    <a
                        target="_blank"
                        href="https://drive.google.com/file/d/1gyKDQJNxVROKWXVkvC0l_c2Hi1bW5ClC/view?usp=sharing"
                        className="social resumeIcon"
                        >Resumé</a>
                    </li>
                    <li>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/jessie-doherty-9a5102239/"
                        className="social linkedin"
                        >LinkedIn</a>
                    </li>
                    <li>
                    <a
                        target="_blank"
                        href="https://github.com/zhuzhu930"
                        className="social github"
                        >Github</a>
                    </li>
                </ul>
                <p className="copyright">&copy; Copyright 2022, Jessie Doherty Coding</p>
            </footer>
        </div>    
    )
}