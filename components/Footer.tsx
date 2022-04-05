import React from 'react'

const Footer = () => {
  return (
    <div className="footer lg:mt-18 mt-12 py-6 sm:pt-12 sm:pb-12">
      <div className="mx-auto max-w-4xl px-4 text-gray-800 dark:text-white">
        <div className="dark:border-white-300 mb-2 border-t-2 border-gray-300 pb-8" />
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <p>Built with 🎶</p>
          <div className="flex flex-wrap space-x-2 pt-2 font-medium sm:space-x-4 lg:pt-0">
            <a
              href="https://twetch.com/jointheparty"
              className={'transition-colors hover:text-yellow-500'}
              target="_blank"
              rel="noreferrer"
            >
              Twetch
            </a>
            <a
              href="https://www.linkedin.com/in/abravenewworld/"
              className={'transition-colors hover:text-yellow-500'}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/dnh33"
              className={'transition-colors hover:text-yellow-500'}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://blog.danielhjermitslev.com"
              className={'transition-colors hover:text-yellow-500'}
              target="_blank"
              rel="noreferrer"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
