import FilterSideBar from "@/components/FilterSideBar";
import JobsResults from "@/components/JobsResults";
import { SkeletonCard } from "@/components/SkeletonCard";
import InfoSection from "@/components/InfoSection";

import { JobFilterValues } from "@/lib/validation";
import { Metadata } from "next";
import { Suspense } from "react";
import Hero from "@/components/Hero";
interface PageProps {
  searchParams: Promise<{
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
  }>;
}

function getTitle({ q, type, location, remote }: JobFilterValues) {
  const titlePrefix = q
    ? `${q} Jobs`
    : type
      ? `${type} Developer Jobs`
      : remote
        ? "Remote Developer Jobs"
        : "All developer Jobs";
  const tittleSuffix = location ? ` in ${location}` : "";
  return `${titlePrefix}${tittleSuffix}`;
}

export async function generateMetadata(props: PageProps) : Promise<Metadata> {
  const searchParams = await props.searchParams
  const { q, type, location, remote } = searchParams;

  return {
    title: getTitle({
      q,
      type,
      location,
      remote: remote === "true", 
    }),
  };
}

export default async function Home(props: PageProps) {
  const searchParams = await props.searchParams;

  const { q, type, location, remote } = searchParams;

  const filterValues: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };
  return (
    <>
    <main className="m-auto max-w-screen ">
    <Hero/>

      <div className="max-w-5xl m-auto">

      <h1 className="my-2 text-center text-4xl font-bold tracking-tight lg:text-5xl">
        {getTitle(filterValues)}
      </h1>
      <h3 className="my-2 text-center text-lg font-semibold text-gray-600">
        Find your dream job in tech
      </h3>
      <section className="flex flex-col gap-4 md:flex-row">
        <FilterSideBar defaultValues={filterValues} />
        <Suspense fallback={<SkeletonCard />}>
          <JobsResults filterValues={filterValues} />
        </Suspense>
      </section>
      </div>
              <InfoSection/>
      
    </main>
    </>
  );
}
