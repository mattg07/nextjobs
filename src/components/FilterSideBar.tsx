import prisma from "@/lib/prisma";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Select from "./ui/select";
import { jobTypes } from "@/lib/JobsTypes";
import { Button } from "./ui/button";
import { jobFilterSchema } from "@/lib/validation";
import { redirect } from "next/navigation";

async function filterJobs(formData: FormData) {
  "use server";
  const values = Object.fromEntries(formData.entries())
  const {q, type, location, remote} = jobFilterSchema.parse(values)
  const searchParams = new URLSearchParams({
    ...(q && {q: q.trim()}),
    ...(type && {type}),
    ...(location && {location}),
    ...(remote && {remote : "true"}),
  });
  redirect(`/?${searchParams.toString()}`)
}

export default async function FilterSideBar() {
  const allLocations = (await prisma.job
    .findMany({
      where: { approved: true },
      select: { location: true },
      distinct: ["location"],
    })
    .then((locations) =>
      locations.map(({ location }) => location).filter(Boolean),
    )) as string[];
  return (
    <aside className="sticky top-0 h-fit rounded-lg border bg-gray-50 p-4 md:w-[260px]">
      <form action={filterJobs}>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="q">Search</Label>
            <Input id="q" name="q" placeholder="Title, company, etc" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="type">Type</label>
            <Select id="type" name="type" defaultValue="">
              <option value="">All types</option>
              {jobTypes.map((location) => (
                <option key={location} value={location}>
                  {" "}
                  {location}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="Location">Location</label>
            <Select id="location" name="location" defaultValue="">
              <option value="">All locations</option>
              {allLocations.map((location) => (
                <option key={location} value={location}>
                  {" "}
                  {location}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="remote"
              id="remote"
              className="scale-125 accent-black"
            />
            <label htmlFor="remote"> Remote Jobs</label>
          </div>
          <Button type="submit" className="w-full">Filter jobs</Button>
        </div>
      </form>
    </aside>
  );
}
