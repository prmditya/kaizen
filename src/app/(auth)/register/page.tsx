import { Input } from "@/components/ui/input";
import { IoPerson } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Register() {
  return (
    <div className="flex flex-col gap-4 py-3 justify-center">
      <h1 className="text-[48px] font-bold">Register</h1>
      <p className="text-gray-500">Create an account to continue</p>
      <div className="neu flex items-center gap-2 px-4 py-2 flex-1">
        <IoPerson />
        <Input type="text" placeholder="Username" />
      </div>
      <div className="neu flex items-center gap-2 px-4 py-2 flex-1">
        <RiLockPasswordFill />
        <Input type="password" placeholder="Password" />
      </div>
      <div className="neu flex items-center gap-2 px-4 py-2 flex-1">
        <RiLockPasswordFill />
        <Input type="password" placeholder="Confirm Password" />
      </div>
      <button className="neu paddings w-fit mt-4 hover:bg-green-300">
        <span className="text-base">Register</span>
      </button>
      <a className="underline hover:text-green-400 transition-all" href="http://localhost:3000/login">
        Already have an account? click here to log-in.
      </a>
    </div>
  );
}
