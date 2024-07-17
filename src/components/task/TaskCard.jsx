import React from 'react';
import { TaskCardTitle } from './TaskCardTitle';
import { TaskCardsDeleteButton } from './button/TaskCardsDeleteButton';
import { TaskAddInput } from './input/TaskAddInput';
import { Tasks } from './Tasks';
import { useState } from "react";


export const TaskCard=({taskCardsList,setTaskCardsList,taskCard})=> {
  const [inputText,setInputText] = useState("");
  const [taskList,setTaskList] = useState([]);

  return (
    <div className='taskCard'>
      <div
        className='taskCardTitleAndTaskCardDeleteButtonArea'>
      <TaskCardTitle />
      <TaskCardsDeleteButton 
        taskCardsList={taskCardsList}
        setTaskCardsList={setTaskCardsList}
        taskCard={taskCard}
      />
      </div>
      <TaskAddInput 
      inputText={inputText} 
      setInputText={setInputText}
      setTaskList={setTaskList}
      taskList={taskList}
      />
      <Tasks 
      inputText={inputText}
      taskList={taskList}
      setTaskList={setTaskList}
      />
    </div>
  );
};
