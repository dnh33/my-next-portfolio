import type { NextPage } from 'next'
import Projects from '@components/Projects'

const ProjectPage: NextPage = () => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <main className="mx-auto max-w-4xl antialiased">
        <Projects />
      </main>
    </div>
  )
}

export default Projects
