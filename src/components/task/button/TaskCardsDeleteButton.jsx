import React from 'react';
import { FaRegTimesCircle } from "react-icons/fa";

export const TaskCardsDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  
  const taskCardsDeleteButton=(id)=>{
    //タスクカードを削除する
    setTaskCardsList(taskCardsList.filter((e)=> e.id !== id));
  };
  return (
    <div>
      <button 
      className='taskCardsDeleteButton'
      onClick={()=>
        taskCardsDeleteButton(taskCard.id)}
      >
        <FaRegTimesCircle />
      </button>
    </div>
  );
};

