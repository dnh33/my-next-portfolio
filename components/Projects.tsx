import React from 'react'
import Image from 'next/image'
import userData from 'constants/data'

type LayoutProps = {
  title: string
  link: string
  imgUrl: string
  number: any
}

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="mx-auto h-48 max-w-6xl bg-white dark:bg-gray-800">
        <h1 className=" py-20 text-center text-3xl font-bold md:text-left md:text-9xl">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-20 pb-40 md:grid-cols-2">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ title, link, imgUrl, number }: LayoutProps) => {
  return (
    <a href={link} className="block w-full shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <Image
            src={imgUrl}
            width={560}
            height={288}
            alt="ㅤ"
            className="duration-2000 h-full w-full transform object-cover transition ease-out hover:scale-125"
          />
        </div>
        <h1 className="absolute top-10 left-10 rounded-md bg-black bg-opacity-40 px-2 pb-1 text-xl font-bold text-gray-50">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-xl font-bold text-gray-50 outline">
          {number.length === 1 ? '0' + number : number}
        </h1>
      </div>
    </a>
  )
}
