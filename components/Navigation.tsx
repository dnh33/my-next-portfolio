import Link from 'next/link'
import React from 'react'
import ThemeSwitch from '@components/ThemeSwitch'

const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 bg-white py-2 dark:bg-black md:mb-6 md:py-6">
      <div className="container mx-auto flex items-center justify-between px-4 lg:max-w-4xl">
        <div className="flex items-start">
          <Link href="/">
            <a
              className={
                'font-medium uppercase tracking-wider text-gray-900 transition-colors hover:text-sky-500 dark:text-white dark:hover:text-sky-500'
              }
            >
              D. Niemann Hjermitslev
            </a>
          </Link>
        </div>
        <div className="flex items-center space-x-5">
          <Link href="/projects">
            <a className="font-medium uppercase tracking-wider text-gray-900 transition-colors hover:text-sky-500 dark:text-white dark:hover:text-sky-500">
              see projects
            </a>
          </Link>
          <Link href="/contact">
            <a className="font-medium uppercase tracking-wider text-gray-900 transition-colors hover:text-sky-500 dark:text-white dark:hover:text-sky-500">
              get in touch
            </a>
          </Link>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  )
}

export default Navigation
