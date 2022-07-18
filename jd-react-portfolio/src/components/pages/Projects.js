import React from 'react';
import SoundRiver from '../../images/SoundRiver.png';
import GadgetGetter from '../../images/GadgetGetter.png';
import Trivia from '../../images/triviaOfImpressionism.png';
import NoteTaker from '../../images/ExpressNoteTaker.png';

export default function Projects() {

  // Set up list item array: 
  const projectList = [
    {
      name: "SoundRiver Music App",
      repo: "https://github.com/zhuzhu930/SoundRiver-Proj1",
      webpage: "https://zhuzhu930.github.io/SoundRiver-Proj1/",
      screenshot: SoundRiver
    },
    {
      name: "GadgetGetter App",
      repo: "https://github.com/zhuzhu930/GadgetGetter-Project2",
      webpage:"https://gadget-getter.herokuapp.com/login",
      screenshot: GadgetGetter
    },
    {
      name: "Trivia of Impressionism",
      repo: "https://github.com/zhuzhu930/hw4-CodeQuiz-JD",
      webpage:"https://zhuzhu930.github.io/hw4-CodeQuiz-JD/",
      screenshot: Trivia
    },
    {
      name: "Express.js Note Taker",
      repo: "https://github.com/zhuzhu930/hw11_ExpessJSNoteTaker_JD",
      webpage: "https://obscure-lake-98693.herokuapp.com/",
      screenshot: NoteTaker
    }
  ];

  // Iterate list items: 
  const ProjectItem = ({list}) => (
    <ul className="repolist">
      {list.map(item =>
        <li>
            <p>{item.name}</p>
            <a
              target="_blank"
              href={item.repo}
              >Repo</a>
            <a
              target="_blank"
              href={item.webpage}
              >Webpage</a>
            <a target="_blank" href={item.screenshot}
              >Screenshot</a>
          </li>
      )}
    </ul>  
  );

  return (
    <div className="card">
        <h2>Selected Repositories</h2>
        <p>
          Please feel free to take a look at some of the sites I've designed or
          participated in designing:
        </p>
        <ProjectItem list={projectList}/>
      </div>
  );
}