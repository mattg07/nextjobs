import FilterSideBar from "@/components/FilterSideBar";
import JobsResults from "@/components/JobsResults";
import { SkeletonCard } from "@/components/SkeletonCard";
import { JobFilterValues } from "@/lib/validation";
import { Suspense } from "react";
interface PageProps {
  searchParams: Promise<{
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
  }>;
}
export default async function Home(props: PageProps) {
  const searchParams = await props.searchParams;

  const {
    q,
    type,
    location,
    remote
  } = searchParams;

  const filterValues : JobFilterValues = {
q,
type,
location,
remote: remote === "true",
  }
  return (
    <main className="m-auto my-10 max-w-5xl px-3">
      <h1 className="my-2 text-center text-4xl font-bold tracking-tight lg:text-5xl">
        Developer Jobs
      </h1>
      <h3 className="my-2 text-center text-lg font-semibold text-gray-600">
        Find your dream job in tech
      </h3>
      <section className="flex flex-col gap-4 md:flex-row">
        <FilterSideBar />
        <Suspense fallback={<SkeletonCard/>}>

        <JobsResults filterValues={filterValues} />
        </Suspense>
      </section>
    </main>
  );
}
