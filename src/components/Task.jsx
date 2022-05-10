import React from "react";

function Task({ step, title, description, isActive, isDone, isLast }) {
  return (
    <div className="task">
      <div className={isActive ? "step active" : "step"}>
        {isDone ? "✔" : step}
        {!isLast && (
          <span class={isDone ? "connector done" : "connector"}></span>
        )}
      </div>

      <div>
        <div className="title"> {title} </div>
        <div className="description"> {description} </div>
      </div>
    </div>
  );
}

export default Task;
