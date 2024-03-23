'use server';

import { redirect } from 'next/navigation';

export interface FormState {
  error: string;
}

export const login = async (state: FormState, formData: FormData) => {
  const userInfo = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  try {
    console.log('🚀 ~ login ~ userInfo:', userInfo);
  } catch (error: any) {
    state.error = error.message;
    console.log('🚀 ~ createTask ~ error:', error);
    return state;
  }

  redirect('/');
};
