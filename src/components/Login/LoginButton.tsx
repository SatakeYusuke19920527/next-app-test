import Link from 'next/link';
import React from 'react';
import { FaPen } from 'react-icons/fa';

interface LoginButtonProps {
  // id: string;
}

const LoginButton: React.FC<LoginButtonProps> = () => {
  return (
    <Link href={`/`}>
      <FaPen className="size-5 text-lg hover:text-gray-700 cursor-pointer" />
    </Link>
  );
};

export default LoginButton;
