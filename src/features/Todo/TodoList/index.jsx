import React from "react";
import PropTypes from "prop-types";
import TodoItem from "../TodoItem";
import "./style.scss";

TodoList.propTypes = {
  subjects: PropTypes.array,
  subjectOnClick: PropTypes.func,
};

TodoList.defaultProps = {
  subjects: null,
  subjectOnClick: null,
};

function TodoList(props) {
  const { subjects, subjectOnClick } = props;

  const handleSubjectClick = (sj, id) => {
    if (!subjectOnClick) return;

    subjectOnClick(sj, id);
  };

  return (
    <div>
      <h1>TodoList</h1>
      <ul className="todolist">
        {subjects.map((sj, index) => (
          <li key={index} onClick={() => handleSubjectClick(sj, index)}>
            <TodoItem subjectItem={sj} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
