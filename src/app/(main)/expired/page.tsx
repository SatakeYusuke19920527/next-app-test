import TaskCard from '../../../components/TaskCard/TaskCard';
import { Task } from '../../../models/task';

const getExpiredTasks = async (): Promise<Task[]> => {
  const response = await fetch(
    `${process.env.PRODUCTION_URL}/api/tasks/expired`,
    {
      cache: 'no-store',
    }
  );

  if (response.status !== 200) throw new Error('Failed to fetch tasks');

  const data = await response.json();
  return data.resources as Task[];
};

const ExpiredTaskPage = async () => {
  const expiredTasks = await getExpiredTasks();
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">Expired Tasks</h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {expiredTasks.map((task) => (
          <TaskCard key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
}

export default ExpiredTaskPage