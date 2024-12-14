import prisma from "@/lib/prisma";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Select from "./ui/select";
import { jobTypes } from "@/lib/JobsTypes";
import { jobFilterSchema, JobFilterValues } from "@/lib/validation";
import { redirect } from "next/navigation";
import FormSubmitButton from "./FormSubmitButton";

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

interface JobFilterSideBarProps {
  defaultValues:  JobFilterValues
}

export default async function FilterSideBar({defaultValues} : JobFilterSideBarProps) {
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
      <form action={filterJobs} key={JSON.stringify(defaultValues)}>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="q">Search</Label>
            <Input id="q" name="q" placeholder="Title, company, etc" 
            defaultValue={defaultValues.q}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="type">Type</label>
            <Select id="type" name="type" defaultValue={defaultValues.type || ""}>
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
            <Select id="location" name="location" defaultValue={defaultValues.location || ""}>
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
              defaultChecked={defaultValues.remote}
            />
            <label htmlFor="remote"> Remote Jobs</label>
          </div>
          <FormSubmitButton className="w-full">Filter Jobs</FormSubmitButton>
        </div>
      </form>
    </aside>
  );
}
