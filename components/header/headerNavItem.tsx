import NextLink from "../ui/nextLink";
import { ReactNode } from "react";

export default function HeaderNavItem({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <li>
      <NextLink href={href} className="capitalize text-xl">{children}</NextLink>
    </li>
  );
}
