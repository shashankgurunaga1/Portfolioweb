import React from "react";
import GitHubCalendar from "react-github-calendar";

function GitHubActivity(){
      return(
      <div className="github1" style={{color:"white"}}>
      <h3>My GitHub Commit Activity</h3>
      <GitHubCalendar username="shashankgurunaga1" />
    </div>
      )
};
export default GitHubActivity;