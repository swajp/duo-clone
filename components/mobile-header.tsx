import MobileSidebar from "./mobile-sidebar";

export default function MobileHeader() {
  return (
    <nav className="lg:hidden px-6 h-[50px] flex bg-cyan-800 items-center border-b fixed top-0 w-full z-50">
      <MobileSidebar />
    </nav>
  );
}
