import Image from "next/image";
import Link from "next/link"
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-2">
        <Image src="/world.png" className="opacity-90" alt="imagelogo" width={65} height={65} />
        <span className="text-xl tracking-tight font-bold text-black font-poppins bg-clip-text ">
        Mundo Jobs
      </span>        </Link>
        <Button asChild>
            <Link href="/jobs/new">Post a job</Link>
        </Button>
      </nav>
    </header>
  );
}
