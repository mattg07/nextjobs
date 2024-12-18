"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <main className="w-full bg-gradient-to-r from-orange-400 to-rose-400 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
        <div className="flex flex-col items-center py-10 text-center lg:py-32">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Your calling is <br className="hidden sm:inline" />
            <span className="text-yellow-300">Here!</span>
          </h1>
          <p className="mb-12 max-w-3xl text-xl text-orange-100">
            Discover opportunities that match your skills and aspirations. Start
            your journey to a fulfilling career today.
          </p>
          {/* <div className="flex flex-row justify-between gap-3">
            <p>Remote</p>
            <p>Tech</p>
            <p>Part time</p>
            <p>Start Ups</p>
          </div> */}

          <div className="mt-12 flex items-center justify-center space-x-4 text-sm">
            <span>Popular searches:</span>
            <Button
              variant="link"
              className="text-yellow-300 hover:text-yellow-100"
            >
              Software Engineer
            </Button>
            <Button
              variant="link"
              className="text-yellow-300 hover:text-yellow-100"
            >
              Data Analyst
            </Button>
            <Button
              variant="link"
              className="text-yellow-300 hover:text-yellow-100"
            >
              UX Designer
            </Button>
          </div>
          <Button
            variant="link"
            className="mt-8 text-yellow-300 hover:text-yellow-100"
          >
            For Employers: Post a Job <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </main>
  );
}
