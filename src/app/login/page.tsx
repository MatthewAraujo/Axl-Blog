"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const { status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className="">Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }
  return (
    <div className="flex items-center justify-center mt-14">
      <div className="flex flex-col gap-12 rounded-lg bg-gray-300 w-96">
        <div
          className="p-5 rounded-lg border-none bg-red-500 text-slate-200 text-sm sm:text-lg sm:font-bold cursor-pointer flex items-center justify-center"
          onClick={() => signIn("google")}
        >
          Sign in with Google
        </div>
        <div className="p-5 rounded-lg border-none bg-stone-800 text-slate-200 text-sm sm:text-lg sm:font-bold cursor-pointer flex items-center justify-center">
          Sign in with Github
        </div>
        <div className="p-5 rounded-lg border-none bg-blue-700 text-slate-200 text-sm sm:text-lg sm:font-bold cursor-pointer flex items-center justify-center">
          Sign in with Facebook
        </div>
      </div>
    </div>
  );
}
