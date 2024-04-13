import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SidebarItem from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import Loader from "./loader";

type Props = {
  className?: string;
};

export default function Sidebar({ className }: Props) {
  return (
    <div
      className={cn(
        "flex lg:fixed h-full lg:w-[256px] left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/penguino.svg" alt="Logo" width={40} height={40} />
          <h1 className="text-2xl font-extrabold text-cyan-900 tracking-wide">
            penguino
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" href="/learn" icon="/icons/learn.svg" />
        <SidebarItem
          label="Leaderboard"
          href="/leaderboard"
          icon="/icons/leaderboard.svg"
        />
        <SidebarItem label="quests" href="/quests" icon="/icons/quests.svg" />
        <SidebarItem label="Shop" href="/shop" icon="/icons/shop.svg" />
      </div>
      <div className="py-4 flex flex-col">
        <SidebarItem
          label="Settings"
          href="/settings"
          icon="/icons/settings.png"
        />
      </div>
    </div>
  );
}
