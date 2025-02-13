import { useReducer, useState } from "react";

let nextIndex = 3;
const initialTasks = [
  { id: 0, text: "Visit museum", done: true },
  { id: 1, text: "Visit bank", done: false },
  { id: 2, text: "Visit zoo", done: true },
];

const taskReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, { id: action.id, text: action.text, done: false }];
    case "toggle":
      return state.map((task) =>
        task.id === action.task.id ? action.task : task
      );
    case "update":
      return state.map((task) =>
        task.id === action.id ? { ...task, text: action.text } : task
      );
    case "delete":
      return state.filter((task) => task.id !== action.id);
    default:
      return state;
  }
};

export const Tasks = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  const [newTaskText, setNewTaskText] = useState("");
  const [editTask, setEditTask] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTaskText.trim() === "") return;
    dispatch({ type: "add", id: nextIndex++, text: newTaskText });
    setNewTaskText("");
  };

  const handleDelete = (id) => {
    dispatch({ type: "delete", id });
  };

  const handleToggle = (task) => {
    dispatch({ type: "toggle", task: { ...task, done: !task.done } });
  };

  const handleUpdate = (id) => {
    dispatch({ type: "update", id, text: editText });
    setEditTask(null);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <form onSubmit={handleAddTask}>
        <input
          value={newTaskText}
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
          {editTask === task.id ? (
            <>
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleUpdate(task.id)}>Save</button>
              <button onClick={() => setEditTask(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span>{task.text}</span>
              <button
                onClick={() => {
                  setEditTask(task.id);
                  setEditText(task.text);
                }}
              >
                Edit
              </button>
            </>
          )}
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
