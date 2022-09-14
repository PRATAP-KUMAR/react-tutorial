import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({
  handleChangeProps, deleteTodoProps, setUpdate, todos,
}) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleChangeProps={handleChangeProps}
        deleteTodoProps={deleteTodoProps}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

TodosList.propTypes = {
  handleChangeProps: PropTypes.string.isRequired,
  deleteTodoProps: PropTypes.string.isRequired,
  setUpdate: PropTypes.string.isRequired,
};

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    todo: PropTypes.string.isRequired,
  })).isRequired,
};

export default TodosList;
