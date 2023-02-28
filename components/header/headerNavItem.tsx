import NextLink from "../ui/nextLink";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function HeaderNavItem({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isPathActive = pathname === href;

  return (
    <li>
      <NextLink
        href={href}
        className={`capitalize text-xl ${
          isPathActive ? "after:scale-100" : ""
        }`}
      >
        {children}
      </NextLink>
    </li>
  );
}
