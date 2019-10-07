import React from 'react';
import styled from 'styled-components';
import { List, Icon } from 'antd';

const StyleListItem = styled(List.Item)`
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const TodoItem = ({ todo, remove, toggle, isComplete, index }) => {
  return (
    <StyleListItem style={{ textDecoration: isComplete ? 'line-through' : '' }}>
      <p>{todo.content}</p>
      <Wrapper>
        {!isComplete ? (
          <Icon
            type='check-circle'
            style={{ color: 'green', marginRight: '10px' }}
            theme='filled'
            onClick={() => toggle(index)}
          />
        ) : (
          <Icon
            type='sync'
            style={{ color: 'green', marginRight: '10px' }}
            spin
            onClick={() => toggle(index, isComplete)}
          />
        )}
        <Icon
          type='close-circle'
          style={{ color: '#eb2f96' }}
          theme='filled'
          onClick={() => remove(index)}
        />
      </Wrapper>
    </StyleListItem>
  );
};

export default TodoItem;
