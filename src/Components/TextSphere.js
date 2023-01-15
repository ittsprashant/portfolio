import React, { useEffect } from "react";
// import "../styles/TextShpere.css";
import "./TextSphere.css" 

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextSphere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    const myTags = [
      'JavaScript', 'CSS', 'HTML',
       'React', "Redux",
      'Python', 'git',
       'MySQL', 'jQuery',
  ];

  // var tagCloud = TagCloud('.content', myTags);

  var tagCloud = TagCloud('.content', myTags,{

    // radius in px
    radius: 200,
  
    // animation speed
    // slow, normal, fast
    maxSpeed: 'normal',
    initSpeed: 'normal',
  
    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 90,
  
    // interact with cursor move on mouse out
    keep: true
  
  }); 
  }, []);

  return (
    <>
      <div>
        {/* span tag className must be "tagcloud"  */}
        {/* <span className="tagcloud"></span> */}
        <span className="content"></span>
      </div>
    </>
  );
};

export default TextSphere;
          
        