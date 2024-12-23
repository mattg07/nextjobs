import prisma from "@/lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CalendarIcon,
  MapPinIcon,
  Building2Icon,
  BanknoteIcon,
} from "lucide-react";
import { cache } from "react";
import { Metadata } from "next";
import Markdown from "@/components/Markdown";

interface JobPageProps {
  params: Promise<{ slug: string }>;
}

const getJob = cache(async (slug: string) => {
  const job = await prisma.job.findUnique({
    where: { slug },
  });
  if (!job) notFound();
  return job;
});

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const {slug} = await params;
  const job = await getJob(slug);
  return {
    title: job.title,
  };
}
export async function generateStaticParams(){
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    select: { slug: true },
  });
  return jobs.map(({ slug }) => ({ slug }));
}



export default async function Page({ params }: JobPageProps) {
  const { slug } = await params;
  const job = await getJob(slug);


const {applicationEmail, applicationUrl} = job


const applicationLink  = applicationEmail ?
`mailto:${applicationEmail}` : applicationUrl

if(!applicationLink){
  console.error("Job have no email or application link")
}

  return (
    <main className="container mx-auto my-8 px-4">
      <Card className="mx-auto max-w-4xl">
        <CardHeader className="space-y-4">
          <div className="flex items-center space-x-4">
            <Image
              src={job.companyLogoUrl as string}
              alt={job.companyName}
              width={80}
              height={80}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-3xl font-bold">{job.title}</h1>
              <p className="text-xl text-muted-foreground">{job.companyName}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="flex items-center">
              <CalendarIcon className="mr-1 h-3 w-3" />
              Posted {job.createdAt.toLocaleDateString()}
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <MapPinIcon className="mr-1 h-3 w-3" />
              {job.location}
            </Badge>
            <Badge variant="secondary" className="flex items-center">
              <Building2Icon className="mr-1 h-3 w-3" />
              {job.locationType}
            </Badge>
            {job.salary && (
              <Badge variant="secondary" className="flex items-center">
                <BanknoteIcon className="mr-1 h-3 w-3" />
                {job.salary}
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="mb-2 text-2xl font-semibold">Job Description</h2>
            {job.description && <Markdown>{job.description}</Markdown>}
            {/* <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: job.description }}
            /> */}
          </section>
        </CardContent>
        <CardFooter className="border-red-900">
          <Button size="lg" className="m-auto">
          <a href={applicationLink as string}>Apply now</a>
          </Button>
          
        </CardFooter>
      </Card>
    </main>
  );
}
