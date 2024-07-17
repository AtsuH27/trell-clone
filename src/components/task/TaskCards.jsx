import React, { useState } from 'react';
import{TaskCard}from"./TaskCard";
import {AddTaskCardButton}from"./button/AddTaskCardButton";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';


export  const TaskCards=()=> {
  const[taskCardsList,setTaskCardsList]=useState([
    {
      id:0,
      draggableId:"item0",
    }
  ]);
  
  return (
  <DragDropContext>
    <Droppable droppableId='droppable'direction='horizontal'>
    <div className='taskCardsArea'>
      {taskCardsList.map((taskCard)=>(
        <TaskCard 
          key ={taskCard.id}
          taskCardsList={taskCardsList}
          setTaskCardsList={setTaskCardsList}
          taskCard={taskCard}
        />
      ))}
      <AddTaskCardButton 
        taskCardsList={taskCardsList}
        setTaskCardslist={setTaskCardsList}
        />
    </div>
    </Droppable>
    </DragDropContext>
  );
};
