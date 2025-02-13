import { useReducer, useState } from "react";

let nextIndex = 3;
const initialTasks = [
  {
    id: 0,
    text: "Visit museum",
    done: true,
  },
  {
    id: 1,
    text: "Visit bank",
    done: false,
  },
  {
    id: 2,
    text: "Visit zoo",
    done: true,
  },
];

const taskReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { id: action.id, text: action.text, done: false }];
    case "toggle":
      return state.map((task) =>
        task.id === action.task.id ? action.task : task
      );
    case "delete":
      return state.filter((task) => task.id !== action.id);
  }
};

export const Tasks = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const [newTaskText, setNewTaskText] = useState("");
  //   dispatch("ACTION_TYPE", ACTION.PAYLOAD)

  const handleAddTask = (e) => {
    e.preventDefault();
    dispatch({
      type: "add",
      id: nextIndex,
      text: newTaskText,
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: "delete",
      // id: id
      id,
    });
  };

  const handleToggle = (task) => {
    dispatch({
      type: "toggle",
      task: { ...task, done: !task.done },
    });
  };

  const handleUpdate = () => {
    dispatch({});
  };

  return (
    <div>
      <h1>Tasks</h1>
      <form onSubmit={handleAddTask}>
        <input
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Enter task name"
        />
        <button type="submit">Add</button>
      </form>
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => handleToggle(task)}
          />
          <span>{task.text}</span>
          <button onClick={() => showEdit(!showEdit)}>Edit</button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
