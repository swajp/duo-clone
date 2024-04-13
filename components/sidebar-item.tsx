"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type Props = {
  label: string;
  icon: string;
  href: string;
};

export default function SidebarItem({ label, icon, href }: Props) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Button
      className="justify-start h-[52px]"
      asChild
      variant={active ? "sidebarOutline" : "sidebar"}
    >
      <Link href={href}>
        <Image src={icon} alt={label} width={32} height={32} className="mr-5" />
        {label}
      </Link>
    </Button>
  );
}
