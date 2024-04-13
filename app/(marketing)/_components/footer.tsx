import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost">
          <Image
            src="/flags/es.svg"
            alt="Spanish"
            height={32}
            width={40}
            className="mr-3"
          />
          Spanish
        </Button>
        <Button size="lg" variant="ghost">
          <Image
            src="/flags/jp.svg"
            alt="Japanese"
            height={32}
            width={40}
            className="mr-3"
          />
          Japanese
        </Button>
        <Button size="lg" variant="ghost">
          <Image
            src="/flags/fr.svg"
            alt="French"
            height={32}
            width={40}
            className="mr-3"
          />
          French
        </Button>
        <Button size="lg" variant="ghost">
          <Image
            src="/flags/it.svg"
            alt="Italian"
            height={32}
            width={40}
            className="mr-3"
          />
          Italian
        </Button>
      </div>
    </footer>
  );
}
