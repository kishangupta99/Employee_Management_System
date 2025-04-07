import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16 '>
       
       <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>

            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
            <p className='text-sm mt-2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus rerum dolores laborum tempora labore alias nisi libero iste nam, veniam natus assumenda. Quam, officiis vitae. 
            </p>
            <div className='flex justify-between mt-6 '>
                <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
                <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
            </div>
        </div>
        
      
    </div>
  )
}

export default TaskList
