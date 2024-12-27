'use client'

import { Job } from "@prisma/client"
import Image from "next/image"
import { CalendarDays, MapPin, DollarSignIcon } from 'lucide-react'

interface JobsListItemProps {
  job: Job
}

function JobListItem({
  job: {
    title,
    companyName,
    type,
    locationType,
    location,
    salary,
    companyLogoUrl,
    createdAt,
  },
}: JobsListItemProps) {
  return (
    <article className="group rounded-lg border  border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-start space-x-4">
        <div className="relative h-32  w-32 rounded-full">
          <Image
            src={companyLogoUrl || "/logo-placeholder.png"}
            alt={`${companyName} logo`}
            
            width={80}
            height={80}
            className="transition-transform group-hover:scale-110"
          />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {type}
            </span>
          </div>
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">{companyName}</h3>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center">
              <MapPin className="mr-1 h-4 w-4" />
              {location} • {locationType}
            </div>
            <div className="flex items-center ">
              <DollarSignIcon className="mr-1 h-4 w-4 " />
              {salary}
            </div>
            <div className="flex items-center">
              <CalendarDays className="mr-1 h-4 w-4" />
              Posted {formatDate(createdAt)}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function formatDate(date: Date): string {
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 1) {
    return "Today"
  } else if (diffDays <= 7) {
    return `${diffDays} days ago`
  } else {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }
}

export default JobListItem

