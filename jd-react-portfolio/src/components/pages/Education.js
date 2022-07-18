import React from 'react';

export default function Education() {
  // Set up list item array: 
  const educationList = [
    {
      time: "From Feb 2022 to Aug 2022",
      school: "Georgia Tech Coding Boot Camp",
      diploma: "Professional Certificate"
    },
    {
      time: "From Sep 2007 to June 2009",
      school: "Sino-EU Conference Interpreter Training Center",
      diploma: "Professional Diploma"
    }
  ];
  // Iterate list items: 
  const EducationItem = ({list}) => (
    <ul className="educationlist">
      {list.map(item =>
        <li>{item.time}: {item.school} - {item.diploma}</li>
      )}
    </ul>  
  );

  return (
    <div className="card">
        <h2>Education</h2>
        <p>
          I'm a professional English-Chinese conference interpreter, now trained
          as a fullstack web developer. Through my learning, I found my passion
          lie in the front-end development as I love making websites look great!
        </p>
        <p>
          Specifically, I'm willing to learn everything about building and
          maintaining an outstanding MOOC platform.
        </p>
        {/* Adding list items */}
        <EducationItem list={educationList}/>
      </div>
  );
}