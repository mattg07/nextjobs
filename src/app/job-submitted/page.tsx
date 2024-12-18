import Link from 'next/link'
import { CheckCircle, ArrowRight, FileText, Clock, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function JobSubmittedPage() {
  return (
    <main className="m-auto my-10 max-w-3xl space-y-8 px-3 text-center">
      <div className="space-y-4">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
        <h1 className="text-3xl font-bold text-gray-800">Job Submitted Successfully!</h1>
        <p className="text-xl text-gray-600">
          Thank you for choosing our platform. Your job listing is now pending approval.
        </p>
      </div>

      <Card>
        <CardContent className="p-6">
          <h2 className="mb-4 text-xl font-semibold">What happens next?</h2>
          <ul className="space-y-4 text-left">
            <li className="flex items-center">
              <FileText className="mr-3 h-5 w-5 text-blue-500" />
              Our team will review your job listing
            </li>
            <li className="flex items-center">
              <Clock className="mr-3 h-5 w-5 text-blue-500" />
              Approval typically takes 1-2 business days
            </li>
            <li className="flex items-center">
              <Users className="mr-3 h-5 w-5 text-blue-500" />
              Once approved, your job will be visible to potential candidates
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <p className="text-gray-600">
          Want to submit another job or check the status of your listings?
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/post-job">
              Post Another Job
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Home</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}

