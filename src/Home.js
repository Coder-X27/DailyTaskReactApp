import React, { useEffect, useState } from 'react'
import Task from './Task'

function Home() {
    const [tasks, setTasks] = useState(localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[]);
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const submitHandler=(e)=>{
        setTasks([...tasks,{title,description}])
        e.preventDefault()
        settitle('')
        setdescription('')
    }
    const deleteTask=(index)=>{
        const filteredArray=tasks.filter((val,i)=>{
            return i!==index
        })
        setTasks(filteredArray)
    }
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks)) 
    }, [tasks])
    
    return (
        <>
            <div className="container">
                <div className="titleSection">
                    <h4>Title</h4>
                    <input className='typing' value={title} onChange={(e)=>settitle(e.target.value)} placeholder='Enter Your title here' type="text" />
                </div>
                <div className="descriptionSection">
                    <h4>Description</h4>
                    <input className='typing' value={description} onChange={(e)=>setdescription(e.target.value)} placeholder='Enter Your Description here' type="text" />
                </div>
                <button onClick={submitHandler} className="btn">Add</button>
            </div>
            {
                tasks.map((item,index) => {
                    return <Task deleteTask={deleteTask} key={index} title={item.title} index={index} description={item.description}/>
                })
            }
        </>
    )
}

export default Home