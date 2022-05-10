import React from "react";
import Task from "../components/Task";

function Tasks() {
  return (
    <div>
      <Task
        title="First"
        isDone={true}
        step={1}
        description="Lorem ipsum dolor sit amet."
      />
      <Task
        title="Second"
        isDone={true}
        step={2}
        description="Lorem ipsum dolor sit amet."
      />
      <Task
        title="Third"
        isActive={true}
        step={3}
        description="Lorem ipsum dolor sit amet."
      />
      <Task
        title="Fourth"
        step={4}
        isLast={true}
        description="Lorem ipsum dolor sit amet."
      />
    </div>
  );
}

export default Tasks;
