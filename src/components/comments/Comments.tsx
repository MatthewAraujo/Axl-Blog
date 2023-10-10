"use client";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@clerk/nextjs";

export function Comments() {
  const { userId } = useAuth();

  return (
    <div className="mt-12">
      <div className="mb-8 text-slate-600">Comments</div>

      {userId !== null ? (
        <div className="flex items-center justify-between gap-8">
          <Textarea
            placeholder="write a comment..."
            className="w-full h-24 p-4 border resize-none border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onChange={() => {}}
          />

          <button className="py-4 px-5 text-salte-200 font-bold border-none rounded-md cursor-pointer text-slate-100 bg-teal-600">
            Send
          </button>
        </div>
      ) : (
        <Link href="/sign-in" className="text-teal-500 font-bold">
          sign-in to comment
        </Link>
      )}

      <div className="mt-12">
        <div className="flex gap-2 items-center mb-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1 text-slate-500">
            <span className="text-lg font-medium">John Doe</span>
            <span className="text-slate-600">10.03.2023</span>
          </div>
        </div>

        <p className="text-lg font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          perspiciatis quod id esse repudiandae saepe earum aliquid sit
          cupiditate repellendus ducimus deleniti modi, odio ipsa ratione
          minima! Animi, provident ipsa.
        </p>
      </div>
      <div className="mt-12">
        <div className="flex gap-2 items-center mb-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1 text-slate-500">
            <span className="text-lg font-medium">John Doe</span>
            <span className="text-slate-600">10.03.2023</span>
          </div>
        </div>

        <p className="text-lg font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          perspiciatis quod id esse repudiandae saepe earum aliquid sit
          cupiditate repellendus ducimus deleniti modi, odio ipsa ratione
          minima! Animi, provident ipsa.
        </p>
      </div>
      <div className="mt-12">
        <div className="flex gap-2 items-center mb-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1 text-slate-500">
            <span className="text-lg font-medium">John Doe</span>
            <span className="text-slate-600">10.03.2023</span>
          </div>
        </div>

        <p className="text-lg font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          perspiciatis quod id esse repudiandae saepe earum aliquid sit
          cupiditate repellendus ducimus deleniti modi, odio ipsa ratione
          minima! Animi, provident ipsa.
        </p>
      </div>
    </div>
  );
}
