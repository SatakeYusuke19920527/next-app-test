import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

interface TaskDeleteButtonProps { 
  id: string
}

const TaskDeleteButton:React.FC<TaskDeleteButtonProps> = ({id}) => {
  return (
    <form action="">
      <button type="submit">
        <FaTrashAlt className='size-5 text-lg hover:text-gray-700 cursor-pointer' />
      </button>
    </form>
  )
}

export default TaskDeleteButton