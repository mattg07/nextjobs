import FilterSideBar from "@/components/FilterSideBar";
import JobListItem from "@/components/JobListItem";
import prisma from "@/lib/prisma";

export default async function Home() {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });

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
        <div className="grow space-y-4">
          {jobs.map((job) => (
            <JobListItem job={job} key={job.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
