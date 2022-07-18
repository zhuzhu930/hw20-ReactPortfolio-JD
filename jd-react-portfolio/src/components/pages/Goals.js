import React from 'react';

export default function Goals() {
  // Set up list array: 
  const skillList = ["HTML", "CSS", "JavaScript", "Node.js", "Python", "UX/UI", "Wordpress", "Express.js", "NPM", "MySQL", "Sequelize", "MongoDB", "Mongoose", "PWA", "ORM", "MVC", "React", "MERN Stack"]

  // Iterate list items: 
  const Skills = ({list}) => (
    <ul className="skills">
      {list.map(item =>
        <li>{item}</li>
      )}
    </ul>  
  );

  return (
    <div className="card">
        <h2>Goals</h2>
        <p>
          I want to master the process of building websites and increase my
          knowledge, skills and abilities in:
        </p>
        {/* populate the list items */}
        <Skills list={skillList}/>
        <p>
          I’d like to build websites with full-stack support, combining
          front-end and back-end skills. Specifically, I would like to learn how
          to present an excellent MOOC platform with outstanding virtual
          learning experience and easy to use UI/UX, to gather excellent
          education resources for students of the new century.
        </p>
      </div>
  );
}