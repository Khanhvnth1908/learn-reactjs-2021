import React, { useState } from "react";
import TodoList from "./TodoList";

function Todo() {
  const [subject, setSubject] = useState([
    {
      Name: "ReatcJs",
      Developers: "Facebook",
    },
    {
      Name: "Nodejs",
      Developers: "Ryan Dahl",
    },
    {
      Name: "Asp.Net Core",
      Developers: "Micorosoft",
    },
  ]);

  const handleSubjectClick = (sj, id) => {
    const newSubjectArr = [...subject];

    newSubjectArr.splice(id, 1);

    setSubject(newSubjectArr);
  };

  return (
    <div>
      <TodoList subjects={subject} subjectOnClick={handleSubjectClick} />
    </div>
  );
}

export default Todo;
