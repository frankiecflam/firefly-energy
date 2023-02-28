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
    <header className="bg-white-300 dark:bg-black fixed lg:w-[350px] w-screen lg:top-0 left-0 bottom-0 px-4 py-4 lg:px-0 lg:py-10 overflow-y-auto">
      <nav className="h-full flex lg:flex-col justify-between lg:min-h-[700px]">
        <div className="hidden lg:block">
          <Link href="/" className="w-2/3 mx-auto block">
            <Image
              src={theme === "light" ? Logo_light : Logo_dark}
              alt="website logo"
              className="object-cover w-full h-auto"
            />
          </Link>
        </div>
        <HeaderUserInfo />
        <HeaderNavList />
        <div className="flex lg:flex-col items-center gap-y-4 gap-x-6 fixed top-5 right-5 lg:relative lg:top-0 lg:right-0">
          <HeaderThemeToggler
            onClick={onThemeToggle}
            theme={theme}
            title={theme === "light" ? "use dark mode" : "use light mode"}
          />
          <Button className="self-center lg:dark:bg-black-100 dark:bg-black-200 lg:bg-white-100 bg-white-200">
            Log out
          </Button>
        </div>
      </nav>
    </header>
  );
}
