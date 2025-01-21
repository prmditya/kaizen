'use client';

import { Input } from "@/components/ui/input";
import { RiLockPasswordFill } from "react-icons/ri";

export default function ForgotPassword() {
  return (
    <div className="flex flex-col gap-4 py-3 justify-center">
      <h1 className="text-[48px] font-bold">Forgot Password???</h1>
      <p className="text-gray-500">Fill it with your new password</p>
      <div className="neu flex items-center gap-2 px-4 py-2 flex-1">
        <RiLockPasswordFill />
        <Input type="password" placeholder="Password" />
      </div>
      <div className="neu flex items-center gap-2 px-4 py-2 flex-1">
        <RiLockPasswordFill />
        <Input type="password" placeholder="Confirm Password" />
      </div>
      <button
        className="neu paddings w-fit mt-4 hover:bg-green-300"
        onClick={() => (window.location.href = "http://localhost:3000/login")}
      >
        <span className="text-base">Continue to Login</span>
      </button>
    </div>
  );
}
