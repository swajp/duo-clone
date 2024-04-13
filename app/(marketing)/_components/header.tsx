import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <Link href="/">
          <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
            <Image src="/penguino.svg" alt="Logo" width={40} height={40} />
            <h1 className="text-2xl font-extrabold text-cyan-900 tracking-wide">
              penguino
            </h1>
          </div>
        </Link>
        <ClerkLoading>
          <Loader />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode="modal"
              afterSignUpUrl="/learn"
              afterSignInUrl="/learn"
            >
              <Button size="lg" variant="ghost">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
}
