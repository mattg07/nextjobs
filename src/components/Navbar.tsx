import Image from "next/image";
import Link from "next/link"
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-2">
        <Image src="/joblogo.png" alt="imagelogo" width={55} height={55} />
        <span className="text-lg text-green-800 tracking-tight font-bold">Rem Jobs</span>
        </Link>
        <Button asChild>
            <Link href="/jobs/new">Post a job</Link>
        </Button>
      </nav>
    </header>
  );
}
