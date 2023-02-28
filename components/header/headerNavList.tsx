import HeaderNavItem from "./headerNavItem";

export default function HeaderNavList() {
  return (
    <ul className="flex flex-col items-center gap-y-4">
      <HeaderNavItem href="/">dashboard</HeaderNavItem>
      <HeaderNavItem href="/bills">bills</HeaderNavItem>
      <HeaderNavItem href="/consumption">consumption</HeaderNavItem>
      <HeaderNavItem href="/meter-readings">meter readings</HeaderNavItem>
      <HeaderNavItem href="/account">account</HeaderNavItem>
    </ul>
  );
}
