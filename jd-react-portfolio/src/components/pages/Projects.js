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
              href={item.url}
              >Repo</a>
            <a
              target="_blank"
              href="https://zhuzhu930.github.io/SoundRiver-Proj1/"
              >Webpage</a>
            <a target="_blank" href="assets/images/SoundRiver.png"
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
        <ul className="repolist">
          <li>
            <p>SoundRiver Music App</p>
            <a
              target="_blank"
              href="https://github.com/zhuzhu930/SoundRiver-Proj1"
              >Repo</a>
            <a
              target="_blank"
              href="https://zhuzhu930.github.io/SoundRiver-Proj1/"
              >Webpage</a>
            <a target="_blank" href="assets/images/SoundRiver.png"
              >Screenshot</a>
          </li>
          <li>
            <p>GadgetGetter App</p>
            <a
              target="_blank"
              href="https://github.com/zhuzhu930/GadgetGetter-Project2"
              >Repo</a>
            <a target="_blank" href="https://gadget-getter.herokuapp.com/login"
              >Webpage</a>
            <a target="_blank" href="assets/images/GadgetGetter.png"
              >Screenshot</a>
          </li>
          <li>
            <p>Trivia of Impressionism</p>
            <a
              target="_blank"
              href="https://github.com/zhuzhu930/hw4-CodeQuiz-JD"
              >Repo</a>
            <a
              target="_blank"
              href="https://zhuzhu930.github.io/hw4-CodeQuiz-JD/"
              >Webpage</a>
            <a target="_blank" href="assets/images/triviaOfImpressionism.png"
              >Screenshot</a>
          </li>
          <li>
            <p>Express.js Note Taker</p>
            <a
              target="_blank"
              href="https://github.com/zhuzhu930/hw11_ExpessJSNoteTaker_JD"
              >Repo</a>
            <a target="_blank" href="https://obscure-lake-98693.herokuapp.com/"
              >Webpage</a>
            <a target="_blank" href="assets/images/ExpressNoteTaker.png"
              >Screenshot</a>
          </li>
        </ul>
      </div>
  );
}