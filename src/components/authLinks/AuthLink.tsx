"use client";
import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
export const AuthLinks = () => {
  const { userId } = useAuth();


  return (
    <>
      {userId == null ? (
        <>
          <Link href="/sign-up" className="hidden md:block">
            Login
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden">
              <MenuIcon size={35} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Inicio</DropdownMenuItem>
              <DropdownMenuItem>Sobre</DropdownMenuItem>
              <DropdownMenuItem>Contato</DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/sign-up">Login</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <>
          <Link href="/write" className="hidden md:block">
            Escreva
          </Link>

          <div className="hidden md:block">
          <UserButton afterSignOutUrl="/"  />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden">
              <MenuIcon size={35} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Inicio</DropdownMenuItem>
              <DropdownMenuItem>Sobre</DropdownMenuItem>
              <DropdownMenuItem>Contato</DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/write">Escreva</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <UserButton afterSignOutUrl="/" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )}
    </>
  );
};
