import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { FaRegTrashAlt } from "react-icons/fa";

export const Task = ({task,taskList,setTaskList}) => {

const handleDelete=(id)=>{
    setTaskList(taskList.filter((task)=> task.id!==id));
};
    return (
        <Draggable index={task.id} draggableId={task.draggableId}>
            {(provided)=>(
                <div 
                className='taskBox' 
                key={task.id} 
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                >
                 <p className='taskText'>{task.text}</p>
                 <button 
                 className='taskTrashButoon' 
                 onClick={()=>handleDelete(task.id)}
                >
                    <i className='FaRegTrashAlt'><FaRegTrashAlt/></i>
                </button>
            </div>
            )}
        </Draggable>
  )
}
