import Image from "next/image";

export const Featured = () => {
  return (
    <div className="mt-8">
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl">
        <b>Farinha dev here!</b> Discover my stories and creative ideias.
      </h1>
      <div className="mt-[60px] flex items-center gap-12">
        <div className="hidden flex-1 h-[500px] relative md:flex">
          <Image src="/p1.jpeg" alt="" fill className="cover" />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-3xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet ad
            quia alias repudiandae velit suscipi
          </h1>
          <p className="text-sm font-light text-slate-800 line-clamp-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            minima debitis, ipsam aut animi vero error cupiditate nam quo
            dolorem excepturi labore veritatis. Impedit et odio animi voluptate
            ea natus! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Officiis minima debitis, ipsam aut animi vero error cupiditate nam
            quo dolorem excepturi labore veritatis. Impedit et odio animi
            voluptate ea natus!Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Officiis minima debitis, ipsam aut animi vero
            error cupiditate nam quo dolorem excepturi labore veritatis. Impedit
            et odio animi voluptate ea natus!
          </p>
          <button className="px-5 py-4 rounded-sm w-max border-none bg-slate-300">
            Leia mais
          </button>
        </div>
      </div>
    </div>
  );
};
