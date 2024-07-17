import React from 'react';
import {v4 as uuid} from "uuid";

export const AddTaskCardButton = ({taskCardsList,setTaskCardslist}) => 
{
  const addTaskCard=()=>{
    const taskCardId=uuid();
    //タスクカードを追加する。
      setTaskCardslist([
        ...taskCardsList,
      {
        id:1,
        draggableId:`item${taskCardId}`,
      },
    ]);
  };
  
  return (
    <div className='addTaskCardButtonArea'>
      <button className='addTaskCardButton' onClick={addTaskCard}>
        +
        </button>
    </div>
  );
};
