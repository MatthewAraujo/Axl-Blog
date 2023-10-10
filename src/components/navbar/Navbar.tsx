import Image from "next/image";
import Link from "next/link";
import { AuthLinks } from "../authLinks/AuthLink";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-24">
      <div className=" hidden xl:flex gap-3 flex-1">
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="facebook" width={24} height={24} />
        <Image src="/tiktok.png" alt="facebook" width={24} height={24} />
        <Image src="/youtube.png" alt="facebook" width={24} height={24} />
      </div>
      <div className="flex-1 text-left text-2xl font-bold md:text-4xl md:text-center  ">Farinha</div>
      <div className="flex justify-end md:justify-center gap-4  flex-1 text-lg xl:text-xl xl:gap-5">
        <Link className="hidden md:block" href="/">Inicio</Link>
        <Link className="hidden md:block" href="/contato">Contato</Link>
        <Link className="hidden md:block" href="/about">Sobre</Link>
        <AuthLinks />
      </div>
    </div>
  );
};
