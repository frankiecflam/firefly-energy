import HeaderNavItem from "./headerNavItem";
import { RxDashboard as DashboardIcon } from "react-icons/rx";
import { RiNewspaperLine as BillsIcon } from "react-icons/ri";
import { BiLineChart as ConsumptionIcon } from "react-icons/bi";
import { BsFileSpreadsheet as MeterReadingIcon } from "react-icons/bs";
import { MdOutlineAccountCircle as AccountIcon } from "react-icons/md";

export default function HeaderNavList() {
  return (
    <ul className="flex lg:flex-col items-center gap-y-4 flex-grow lg:flex-grow-0 justify-between">
      <HeaderNavItem href="/">
        <DashboardIcon className="block lg:hidden text-2xl" />
        <span className="hidden lg:block">dashboard</span>
      </HeaderNavItem>
      <HeaderNavItem href="/bills">
        <BillsIcon className="block lg:hidden text-2xl" />
        <span className="hidden lg:block">bills</span>
      </HeaderNavItem>
      <HeaderNavItem href="/consumption">
        <ConsumptionIcon className="block lg:hidden text-2xl" />
        <span className="hidden lg:block">consumption</span>
      </HeaderNavItem>
      <HeaderNavItem href="/meter-readings">
        <MeterReadingIcon className="block lg:hidden text-2xl" />
        <span className="hidden lg:block">meter readings</span>
      </HeaderNavItem>
      <HeaderNavItem href="/account">
        <AccountIcon className="block lg:hidden text-2xl" />
        <span className="hidden lg:block">account</span>
      </HeaderNavItem>
    </ul>
  );
}
