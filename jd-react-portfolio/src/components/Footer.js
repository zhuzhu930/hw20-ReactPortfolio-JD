import React from 'react';
import '../styles/style.css';

export default function Footer() {

    const target = "_blank";
    // set up list array: 
    const footerList = [
        {
          name: "Resumé",
          url: "https://drive.google.com/file/d/1gyKDQJNxVROKWXVkvC0l_c2Hi1bW5ClC/view?usp=sharing",
          className: "social resumeIcon"
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/jessie-doherty-9a5102239/",
          className: "social linkedin"
        },
        {
          name: "Github",
          url: "https://github.com/zhuzhu930",
          className: "social github"
        }
      ];
      // Iterate list items: 
      const FooterItem = ({list}) => (
        <ul>
          {list.map(item =>
            <li>
            <a target={target} href={item.url} className={item.className}>{item.name}</a>
            </li>
          )}
        </ul>  
      );

    return (
        <div>
            <footer>
                <FooterItem list={footerList}/>
                <p className="copyright">&copy; Copyright 2022, Jessie Doherty Coding</p>
            </footer>
        </div>    
    )
}