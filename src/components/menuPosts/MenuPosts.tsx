import Image from "next/image";
import Link from "next/link";

interface MenuPostsProps {
  withImage?: boolean;
}

export function MenuPosts({ withImage }: MenuPostsProps) {
  return (
    <div className="mt-9 mb-14 flex flex-col gap-9">
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="hidden xl:block flex-1 aspect-square relative">
            <Image src="/p1.jpeg" alt="" fill className="rounded-full border-2 border-solid border-slate-400 object-cover"/>
          </div>
        )}
        <div className=" w-ful xl:w-3/4 flex-col gap-1">
          <span className="py-1 px-2 rounded-sm text-xs text-slate-800 w-max">Travel</span>
          <h3 className="text-lg font-medium text-slate-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>

          <div className="text-sm">
            <span>John Doe</span>
            <span className="text-slate-400"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="hidden xl:block flex-1 aspect-square relative">
            <Image src="/p1.jpeg" alt="" fill className="rounded-full border-2 border-solid border-slate-400 object-cover"/>
          </div>
        )}
        <div className=" w-ful xl:w-3/4 flex-col gap-1">
          <span className="py-1 px-2 rounded-sm text-xs text-slate-800 w-max">Travel</span>
          <h3 className="text-lg font-medium text-slate-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>

          <div className="text-sm">
            <span>John Doe</span>
            <span className="text-slate-400"> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
