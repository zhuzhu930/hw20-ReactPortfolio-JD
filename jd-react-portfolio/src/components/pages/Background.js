import React from 'react';

export default function Background() {
  // Define some variables to be used later in JSX: 
  const target = "_blank";
  const href = "https://drive.google.com/file/d/1gyKDQJNxVROKWXVkvC0l_c2Hi1bW5ClC/view?usp=sharing"; 

  return (
    <div className="card">
        <h2>Background</h2>
        <p>
          I’m an aspiring novice web designer who loves everything about the
          web. I've lived in lots of different places in China and America, and
          traveled to many places in the world. I’m excited to bring my life
          experience to the process of building fantastic looking websites.
        </p>
        <p>
          I’ve been a professional interpreter in English-Chinese conference
          interpretation. I love to paint in oils and watercolors, and I'm also
          an avid gardener and a life-long learner who's always interested in
          expanding my skills.
        </p>
        <p>
          To learn more, 
          <a target={target} href={href}>please view my resumé.</a>
        </p>
      </div>
  );
}