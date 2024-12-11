import { Input } from "./ui/input";
import { Label } from "./ui/label";

async function filterJobs(formData: FormData){
"use server"
console.log(formData)
}

export default function FilterSideBar() {
  return (
    <aside className="sticky top-0 p-4 h-fit rounded-lg border bg-gray-50 md:w-[260px]">
        <form action={filterJobs}>
            <div className="flex flex-col gap space-y-4">
               <Label htmlFor="q">Search</Label> 
               <Input id="q" name="q" placeholder="Title, company, etc"/>
            </div>
        </form>
    </aside>
  );
}
