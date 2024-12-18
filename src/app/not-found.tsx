import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-orange-200 to-white px-4">
      
      <h1 className="text-6xl font-bold text-orange-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Job Not Found</h2>  

      <p className="text-xl text-gray-600 mb-8 text-center max-w-md">
        Oops! It seems the job you&apos;re looking for has vanished into thin air. But don&apos;t worry, your dream job is still out there!
      </p>
      <Link href="/" passHref>
        <Button variant="outline">
          Back to Home
        </Button>
      </Link>
    </div>
  )
}

