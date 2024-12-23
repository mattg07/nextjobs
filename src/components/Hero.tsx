import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <main className="w-full overflow-hiddenborder border-purple-800 bg-gradient-to-br from-orange-400 to-amber-700 text-white">



      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-8 text-center lg:py-32">
        <Image
          src="/ilustration.svg"
          alt="Background decoration"
          width={350}
          height={350}
        />
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            Your calling is <br />
            <span className="text-yellow-300">here!</span>
          </h1>
          <p className="mb-12 max-w-2xl text-xl text-white/90">
            Discover opportunities that match your skills and aspirations. Start
            your journey to a fulfilling career today.
          </p>
          <Button
            size="lg"
            className="bg-white text-orange-500 hover:bg-yellow-100"
          >
            Explore Jobs <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </main>
  );
}
