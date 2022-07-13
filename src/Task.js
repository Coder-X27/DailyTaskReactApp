import React from 'react'

function Task(props) {
  return (
    <div className='container task'>
      <div className="taskSection">
        <h4>{props.title}</h4>
        <h3>{props.description}</h3>
        <button className='btn' onClick={()=>props.deleteTask(props.index)}>Delete</button>
      </div>
    </div>
  )
}

export default Task