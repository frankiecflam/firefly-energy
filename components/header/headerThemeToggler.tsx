import { BiSun as SunIcon, BiMoon as MoonIcon } from "react-icons/bi";

export default function HeaderThemeToggler({
  theme,
  title,
  onClick,
}: {
  theme: "light" | "dark";
  title: string;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className="relative z-20" title={title}>
      {theme === "dark" ? (
        <SunIcon className="h-6 w-6 fill-white" />
      ) : (
        <MoonIcon className="h-6 w-6 fill-black" />
      )}
    </button>
  );
}
