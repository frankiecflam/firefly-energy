import Link from "next/link";
import Image from "next/image";
import Logo_dark from "@/public/Logo_dark.svg";
import Logo_light from "@/public/Logo_light.svg";
import HeaderThemeToggler from "./headerThemeToggler";
import HeaderUserInfo from "./headerUserInfo";
import HeaderNavList from "./headerNavList";
import Button from "../ui/button";

interface HeaderProps {
  theme: "light" | "dark";
  onThemeToggle: () => void;
}

export default function Header({ theme, onThemeToggle }: HeaderProps) {
  return (
    <header className="bg-white-300 dark:bg-black fixed w-[350px] top-0 left-0 bottom-0 py-10 overflow-y-auto">
      <nav className="h-full flex flex-col justify-between min-h-[700px]">
        <div>
          <Link href="/" className="w-2/3 mx-auto block">
            <Image
              src={theme === "light" ? Logo_light : Logo_dark}
              alt="website logo"
              className="object-cover w-full h-auto"
            />
          </Link>
        </div>
        <HeaderUserInfo />
        <div className="flex flex-col items-center gap-y-6">
          <HeaderNavList />
          <HeaderThemeToggler
            onClick={onThemeToggle}
            theme={theme}
            title={theme === "light" ? "use dark mode" : "use light mode"}
          />
        </div>

        <Button className="self-center">Log out</Button>
      </nav>
    </header>
  );
}
