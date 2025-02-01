import React from 'react'
import { MdDelete } from "react-icons/md";
export const TodoCards = ({ title, body, id, delid}) => {
  return (
    <div className='p-3 todo-card'>
      <div>
        <h5 className='todo-card-t'>{title.length > 77 ? title.slice(0, 77) + "..." : title}</h5>
        <div className='todo-card-p'>
          {body.split('\n').map((task, index) => (
            <p key={index} className='todo-card-task'>
              {task.length > 77 ? task.slice(0, 77) + "..." : task}
            </p>
          ))} 
        </div>

      </div>
      <div className='d-flex justify-content-around'>
        <div className='d-flex card-icon-head px-3 py-1 text-danger' onClick={()=>{ delid(id) }}>
          <MdDelete className='card-icons del' /> Delete
        </div>
      </div>
    </div>
  )
}
