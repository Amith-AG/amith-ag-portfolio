import React from "react";
import { FaStackOverflow,FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://stackoverflow.com/users/21092961/amith-a-g" target='_blank' rel='noreferrer'><FaStackOverflow /></a>
      
    </div>
    <div>
     <a href="https://www.linkedin.com/in/amith-ag/" target='_blank' rel='noreferrer'><FaLinkedinIn /></a>
    </div>
    <div>
      <a href="https://github.com/Amith-AG" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;
