import React, { useState } from 'react';
import { Input, List } from 'antd';
import styled from 'styled-components';

import TodoItem from './TodoItem';

const Wrapper = styled.div`
  text-align: center;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
`;

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (!input) alert(`You didn't write your todo`);
    const newTodos = [
      ...todos,
      {
        content: input,
        date: null,
        dateString: '',
        isComplete: false,
      },
    ];
    setTodos(newTodos);
    setInput('');
  };

  const handleRemove = index => {
    const newTodos = todos.filter((_, i) => i !== index);

    setTodos(newTodos);
  };

  const handleToggle = (index, isComplete) => {
    const newTodos = [...todos];
    const completeIndex = newTodos.findIndex((_, i) => i === index);
    newTodos[completeIndex].isComplete = !isComplete;
    setTodos(newTodos);
  };

  return (
    <Wrapper>
      <h1>Simple Todo App</h1>
      <Input
        placeholder='Enter your todo'
        value={input}
        onChange={e => setInput(e.target.value)}
        onPressEnter={handleSubmit}
      />
      <List
        locale={{ emptyText: 'No todo items' }}
        dataSource={todos}
        renderItem={(todo, i) => (
          <TodoItem
            todo={todo}
            remove={handleRemove}
            toggle={handleToggle}
            isComplete={todo.isComplete}
            index={i}
          />
        )}
      />
    </Wrapper>
  );
};

export default App;
