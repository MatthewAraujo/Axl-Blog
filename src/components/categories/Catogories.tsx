import Image from "next/image";
import Link from "next/link";

export const Categories = () => {
  return (
    <div className="mt-8">
      <h1 className="my-12 mx-0">Categorias Populares</h1>
      <div className="flex flex-wrap justify-between gap-5">
        <Link
          href="/blog?cat=style"
          className="flex items-center gap-2 capitalize w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-20 justify-center rounded-[10px]  bg-[#57c4ff31]"
        >
          <Image
            src="/style.png"
            alt="programming"
            width={32}
            height={32}
            className="rounded-full aspect-square"
          />
          Style
        </Link>
        <Link
          href="/blog?cat=style"
          className="flex items-center gap-2 capitalize w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-20 justify-center rounded-[10px]  bg-[#57c4ff31]"
        >
          <Image
            src="/style.png"
            alt="programming"
            width={32}
            height={32}
            className="rounded-full aspect-square"
          />
          Style
        </Link>{" "}
        <Link
          href="/blog?cat=style"
          className="flex items-center gap-2 capitalize w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-20 justify-center rounded-[10px]  bg-[#57c4ff31]"
        >
          <Image
            src="/style.png"
            alt="programming"
            width={32}
            height={32}
            className="rounded-full aspect-square"
          />
          Style
        </Link>{" "}
        <Link
          href="/blog?cat=style"
          className="flex items-center gap-2 capitalize w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-20 justify-center rounded-[10px]  bg-[#57c4ff31]"
        >
          <Image
            src="/style.png"
            alt="programming"
            width={32}
            height={32}
            className="rounded-full aspect-square"
          />
          Style
        </Link>{" "}
        <Link
          href="/blog?cat=style"
          className="flex items-center gap-2 capitalize w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-20 justify-center rounded-[10px]  bg-[#57c4ff31]"
        >
          <Image
            src="/style.png"
            alt="programming"
            width={32}
            height={32}
            className="rounded-full aspect-square"
          />
          Style
        </Link>{" "}
        <Link
          href="/blog?cat=style"
          className="flex items-center gap-2 capitalize w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-20 justify-center rounded-[10px]  bg-[#57c4ff31]"
        >
          <Image
            src="/style.png"
            alt="programming"
            width={32}
            height={32}
            className="rounded-full aspect-square"
          />
          Style
        </Link>{" "}
      </div>
    </div>
  );
};
