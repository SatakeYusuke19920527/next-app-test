import React from 'react';

interface LoginButtonProps {
  // id: string;
}

const LoginButton: React.FC<LoginButtonProps> = () => {
  return (
    <a href="/.auth/login/aad">Login with EntraID</a>
  );
};

export default LoginButton;
