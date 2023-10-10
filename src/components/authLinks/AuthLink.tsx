import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
export const AuthLinks = () => {
  const status = "notAuthenticated";
  return (
    <>
      {status === "notAuthenticated" ? (
        <>
          <Link href="/sign-in" className="hidden md:block">
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
                <Link href="/sign-in">Login</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <>
          <Link href="/write" className="hidden md:block">
            Escreva
          </Link>
          <Link href="/logout" className="hidden md:block">
            Logout
          </Link>{" "}
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
                <Link href="/Logout">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )}
    </>
  );
};
