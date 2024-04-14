import { cn } from "@/lib/utils";
import { LoaderIcon } from "lucide-react";

export default function Loader({ className }: { className?: string }) {
  return (
    <LoaderIcon
      className={cn("h-5 w-5 text-muted-foreground animate-spin", className)}
    />
  );
}
