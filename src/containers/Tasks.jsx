import React, { useState } from "react";
import Task from "../components/Task";

function Tasks() {
  const [currentStep, setCurrentStep] = useState(3);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "First",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      id: 2,
      title: "Second",
      description: "Lorem ipsum dolor sit",
    },
    {
      id: 3,
      title: "Third",
      description: "Lorem ipsum dolor sit sam",
    },
    {
      id: 4,
      title: "Fourth",
      description: "Lorem ipsum dolor sit amet.",
    },
  ]);

  return (
    <>
      <div>
        {tasks.map((task, index) => (
          <Task
            key={task.id}
            title={task.title}
            description={task.description}
            step={index + 1}
            isDone={currentStep > index}
            isActive={currentStep === index}
            isLast={index + 1 >= tasks.length}
          />
        ))}
      </div>

      <div className="buttons">
        <button
          onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
          disabled={currentStep <= 0}
          className={currentStep <= 0 ? "disabled" : ""}
        >
          Back
        </button>
        <button
          onClick={() =>
            currentStep < tasks.length && setCurrentStep(currentStep + 1)
          }
          disabled={currentStep >= tasks.length}
          className={currentStep >= tasks.length ? "disabled" : ""}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Tasks;
