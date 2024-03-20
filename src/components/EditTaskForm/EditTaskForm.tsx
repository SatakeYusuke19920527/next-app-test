"use client"

import React, { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { FormState, updateTask } from '../../actions/task';
import { Task } from '../../models/task';

const EditTaskForm = ({ task }: { task: Task }) => {
  const [t, setT] = useState<string>(task.title);
  const [d, setD] = useState<string>(task.description);
  const [dD, setDD] = useState<string>(task.dueDate);
  const [is, setIs] = useState<boolean>(task.isCompleted);

  const updateTaskWithId = updateTask.bind(null, task.id);
  const initialState: FormState = { error: '' };
  const [state, formAction] = useFormState(updateTaskWithId, initialState);

  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="mt-8 py-2 w-full rounded-md text-white bg-gray-800 hover:bg-gray-700 text-sm font-semibold shadow-sm disabled:bg-gray-400"
        disabled={pending}
      >
        Edit
      </button>
    );
  };

  return (
    <div className="mt-10 mx-auto w-full max-w-sm">
      <form action={formAction}>
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={t}
            onChange={(e) => setT(e.target.value)}
            required
            className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={d}
            onChange={(e) => setD(e.target.value)}
            required
            className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="dueDate" className="block text-sm font-medium">
            expired
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            min="1990-01-01"
            max="2999-12-31"
            value={dD}
            onChange={(e) => setDD(e.target.value)}
            required
            className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="isCompleted"
            name="isCompleted"
            checked={is}
            onChange={(e) => setIs(e.target.checked)}
            className="mr-2 w-4 h-4"
          />
          <label htmlFor="isCompleted" className="text-sm">
            Task finished
          </label>
        </div>

        <SubmitButton />
        {state.error && <p className="mt-4 text-red-500">{state.error}</p>}
      </form>
    </div>
  );
}

export default EditTaskForm