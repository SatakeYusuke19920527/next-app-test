"use server"

import { redirect } from 'next/navigation'
import { Task } from '../models/task'
import { container } from '../utils/database'

export interface FormState {
  error: string
}

export const createTask = async (state: FormState, formData: FormData) => {
  const newTask: Task = {
    id: '',
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    dueDate: formData.get('dueDate') as string,
    isCompleted: false,
  };

  try {
    const { resource: createdItem } = await container.items.create(newTask);
    console.log(`Created item: ${JSON.stringify(createdItem)}`);
  } catch (error: any) {
    state.error = error.message;
    console.log('🚀 ~ createTask ~ error:', error);
    return state;
  }

  redirect('/');
}

export const updateTask = async (id: string, state: FormState, formData: FormData) => {
  const updateTask: Task = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    dueDate: formData.get('dueDate') as string,
    isCompleted: formData.get('isCompleted') === 'on' ? true : false,
  };

  try {
    // 更新対象のドキュメントを取得
    const { resource: existingItem } = await container.item(id, id).read();

    // 更新データをマージしてドキュメントを更新
    const updatedItem = { ...existingItem, ...updateTask };
    const { resource: replacedItem } = await container
      .item(id, id)
      .replace(updatedItem);

    console.log('Updated item:', replacedItem);
  } catch (error: any) {
    state.error = error.message;
    console.log('🚀 ~ updateTask ~ error:', error.message);
    return state;
  }

  redirect('/');
};

export const deleteTask = async (
  id: string,
  state: FormState,
  formData: FormData
) => {

  try {
    // データを削除
    const { resource: deleteItem } = await container.item(id, id).delete();

    console.log('Delete item:', deleteItem);
  } catch (error: any) {
    state.error = error.message;
    console.log('🚀 ~ deleteTask ~ error:', error.message);
    return state;
  }

  redirect('/');
};