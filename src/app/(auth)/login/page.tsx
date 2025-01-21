import { Input } from "@/components/ui/input";
import { IoPerson } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Login() {
  return (
    <div className="flex flex-col gap-4 py-3 justify-center">
      <h1 className="text-[48px] font-bold">Log-in</h1>
      <p className="text-gray-500">Fill the form to continue</p>
      <div className="neu flex items-center gap-2 px-4 py-2 flex-1">
        <IoPerson />
        <Input type="text" placeholder="Username" />
      </div>
      <div className="neu flex items-center gap-2 px-4 py-2 flex-1">
        <RiLockPasswordFill />
        <Input type="password" placeholder="Password" />
      </div>
      <button className="neu paddings w-fit mt-4 hover:bg-green-300">
        <span className="text-base">Login</span>
      </button>
      <div className="flex flex-col gap-2">
        <a className="underline hover:text-red-400 transition-all" href="http://localhost:3000/forgot-password">
          Forgot your password? Click here to reset it
        </a>
        <a className="underline hover:text-blue-400 transition-all" href="http://localhost:3000/register">
          Not registered yet? Click here to register
        </a>
      </div>
    </div>
  );
}
