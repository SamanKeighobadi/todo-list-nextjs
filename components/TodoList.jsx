import React from "react";

const Todolist = ({ todos, deleteTodo }) => {
  return (
    <div>
      {todos.length < 0 ? (
        <div>no any todo</div>
      ) : (
        todos.map((todo, index) => (
          <div key={index}>
            <ul>
              <li>
                {todo.text}{" "}
                <button
                  className="bg-red-500 p-2"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default Todolist;
