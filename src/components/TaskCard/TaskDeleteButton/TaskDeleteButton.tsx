"use client"
import React from 'react'
import { useFormState } from 'react-dom'
import { FaTrashAlt } from 'react-icons/fa'
import { FormState, deleteTask } from '../../../actions/task'

interface TaskDeleteButtonProps { 
  id: string
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
  const deleteTaskWithId = deleteTask.bind(null, id)
  const initialState: FormState = { error: '' };
  const [_, formAction] = useFormState(deleteTaskWithId, initialState);
  return (
    <form action={formAction}>
      <button type="submit">
        <FaTrashAlt className="size-5 text-lg hover:text-gray-700 cursor-pointer" />
      </button>
    </form>
  );
}

export default TaskDeleteButton