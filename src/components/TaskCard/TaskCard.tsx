import React from 'react';
import TaskDeleteButton from './TaskDeleteButton/TaskDeleteButton';
import TaskEditButton from './TaskEditButton/TaskEditButton';

const TaskCard = () => {
  return (
    <div className="w-64 h-52 p-4 bg-white rounded-md shadow-md flex flex-col justify-between">
      <header>
        <h1 className="text-lg font-semibold">title</h1>
        <div className="mt-1 text-sm line-clamp-3">task の説明</div>
      </header>
      <div>
        <div className="text-sm">2024-03-01</div>
        <div className="flex justify-between items-center">
          <div
            className={`mt-1 text-sm px-2 py-1 w-24 text-center text-white rounded-full shadow-sm ${
              true ? `bg-green-500` : 'bg-red-500'
            }`}
          >
            {true ? 'Completed' : 'InCompleted'}
          </div>
          <div className='flex gap-4'>
            <TaskEditButton id="1" />
            <TaskDeleteButton id="1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard