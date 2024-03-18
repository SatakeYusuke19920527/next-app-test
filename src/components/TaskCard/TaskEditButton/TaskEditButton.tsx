import Link from 'next/link'
import React from 'react'
import { FaPen } from 'react-icons/fa'

interface TaskEditButtonProps { 
  id: string
}

const TaskEditButton: React.FC<TaskEditButtonProps> = ({id}) => {
  return (
    <Link href={`edit/${id}`}>
      <FaPen className='size-5 text-lg hover:text-gray-700 cursor-pointer' />
    </Link>
  )
}

export default TaskEditButton