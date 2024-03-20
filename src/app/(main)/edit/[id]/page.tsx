import React from 'react';
import EditTaskForm from '../../../../components/EditTaskForm/EditTaskForm';
import { Task } from '../../../../models/task';

interface EditTaskPageProps {
  params: {id: string}
}

const getTask = async (id: string): Promise<Task> => {
  const response = await fetch(
    `${process.env.URL}/api/tasks/${id}`,
    {
      cache: 'no-store',
    }
  );
  if (response.status !== 200) throw new Error('Failed to fetch tasks');
  const data = await response.json();
  return data.resources[0] as Task;
};

const EditTaskPage: React.FC<EditTaskPageProps> = async ({ params }) => {
  const id = params.id
  const task: Task = await getTask(id);
  return (
    <div className="flex flex-col justify-center py-20">
      <h2 className="text-center text-2xl font-bold">Edit Task</h2>
      <EditTaskForm task={task} />
    </div>
  );
};

export default EditTaskPage