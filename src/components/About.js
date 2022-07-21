import React from "react";

function About(props) {
  if(!props.bio){
    return null
  }
return (
  <div id="about">
    <h2>About Me</h2>
    <p>Props.bio</p>
    <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
  </div>
);
}



export default About;
