import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

interface CardProps {
  item: any;
  key: any;
}

export function Card({ item, key }: CardProps) {
  return (
    <div className="mb-12 flex items-center gap-12" key={key}>
      {item.img && (
        <div className=" hidden sm:block flex-1 h-[350px] relative">
          <Image src={item.img} alt="" fill className="object-cover" />
        </div>
      )}
      <div className="flex-1 flex flex-col gap-8">
        <div className="">
          <span className="text-slate-700">
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className="text-rose-600 font-medium">{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <div
          className="text-lg font-light text-slate-600"
          dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }}
        />
        <Link
          href={`/posts/${item.slug}`}
          className="border-b-2 border-solid border-rose-500 w-max py-1 px-0"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
