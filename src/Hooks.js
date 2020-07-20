import React, { useReducer, useState } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD-TODO':
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1,
      };
    case 'TOGGLE-TODO':
      return {
        todos: state.todos.map((t, idx) => {
          return idx === action.idx ? { ...t, completed: !t.completed } : t;
        }),
        todoCount: { completed: true }
          ? state.todoCount - 1
          : state.todoCount + 1,
      };
    default:
      return state;
  }
}

const Hooks = () => {
  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0,
  });
  const [text, setText] = useState();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: 'ADD-TODO', text });
          setText('');
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <br />
      <div>number of Todos: {todoCount}</div>
      {todos.map((t, idx) => (
        <div
          key={t.text}
          onClick={() => dispatch({ type: 'TOGGLE-TODO', idx })}
          style={{
            textDecoration: t.completed ? 'line-through' : '',
            cursor: 'pointer',
          }}
        >
          {t.text}
        </div>
      ))}
      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
    </div>
  );
};

export default Hooks;
