import LoginButton from "@/components/Login/LoginButton";

export default async function LoginPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col justify-between items-center">
        <LoginButton />
      </div>
    </div>
  );
}
