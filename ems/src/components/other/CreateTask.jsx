import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {


  const {userData, setUserData} = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [taskCategory, setTaskCategory] = useState('')
 
  const [newTask, setNewTask] = useState({})


  const submitHandler = (e) => {
    e.preventDefault()

    setNewTask({ taskTitle, taskDescription, taskDate, category: taskCategory, active: false, newTask: true, failed: false, completed: false })

    const data = userData

    data.forEach(function (elem) {
        if (asignTo == elem.firstName) {
            elem.tasks.push(newTask)
            elem.taskCounts.newTask = elem.taskCounts.newTask + 1
        }
    })
    setUserData(data)
    
   
    setTaskDate("")
    setTaskTitle("")
    setTaskDescription("")
    setAsignTo("")
    setTaskCategory("")
  }

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
    <form
      className="flex flex-wrap w-full items-start justify-between"
      onSubmit={(e)=>{
        submitHandler(e)
      }}

    >
        {/* Left side all form */}
      <div className="w-1/2">
        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            type="text"
            placeholder="Make a UI design"
          />
        </div>
        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
          <input
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}

            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            type="date"
          />
        </div>
        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
          <input
            value={asignTo}
            onChange={(e) => setAsignTo(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            type="text"
            placeholder="employee name"
          />
        </div>
        <div>
          <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
          <input

            value={taskCategory}
            onChange={(e) => setTaskCategory(e.target.value)}

            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            type="text"
            placeholder="design, dev, etc"
          />
        </div>
      </div>

       {/* Right side description and create task */}
      <div className="w-2/5 flex flex-col items-start">
        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}

          className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[2px] border-gray-400"
          name=""
          id=""
        ></textarea>

        <button className="bg-emerald-500 py-3 hover:bg-red-600 px-5 rounded text-sm mt-4 w-full">
          Create Task
        </button>
      </div>
    </form>
  </div>
  )
}

export default CreateTask
