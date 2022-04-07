import React from 'react'
import Image from 'next/image'

const Main = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="item-center flex flex-col-reverse text-center lg:-mx-4 lg:flex lg:flex-row lg:space-x-5 lg:text-left">
        <div className="lg:mt-12 lg:px-4 ">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white lg:text-5xl">
            Hi there,
          </h1>
          <div className="mt-6 text-gray-800 dark:text-white">
            <p className="mb-4 blur dark:text-white dark:blur-sm">
              I work as a Dev at{' '}
              <a
                href="https://www.danielhjermitslev.com"
                className="font-bold transition-colors hover:text-sky-500"
                target="_blank"
                rel="noopener"
              >
                Link To Company
              </a>
              .
            </p>
            <p className="blur dark:blur-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>{' '}
            <br />
            <p className="blur dark:blur-sm">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book
            </p>
            <br />
            <h2 className="font-bold">Blockchain and Beyond🚀</h2>
          </div>
        </div>
        <div className="mb-10 flex-shrink-0 lg:mt-12 lg:px-4">
          <Image
            src="https://bico.media/f4fceddb4c707412ec3f6ca4b1f397b543d5b6b933ba65f66a7493efff84f665"
            alt="Profile"
            priority={true}
            className="rounded-full"
            width={250}
            height={250}
          />
          <div className="mt-6 flex justify-center">
            <div className="flex space-x-4 font-medium text-gray-800 dark:text-white sm:flex md:flex lg:flex">
              <a
                className="transition-colors hover:text-sky-600"
                target="_blank"
                rel="noreferrer"
                href="https://twetch.com/jointheparty"
              >
                <svg
                  height="1em"
                  width="1em"
                  viewBox="0 0 20 16"
                  fill="currentColor"
                  className="Socials_icon__x0qea"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.91836 11.0517L9.96033 11.7437C10.0862 13.5374 8.98106 15.1757 7.23236 15.8113C6.58884 16.0373 5.49765 16.0655 4.78418 15.8678C4.50439 15.783 3.97278 15.5006 3.59506 15.2463L2.90957 14.7803L2.15414 15.0204C1.73445 15.1475 1.17486 15.3593 0.923052 15.5006C0.685228 15.6277 0.475386 15.6983 0.475386 15.6559C0.475386 15.4158 0.993 14.5967 1.42668 14.1447C2.01424 13.5092 1.84637 13.4527 0.65725 13.8764C-0.0562189 14.1165 -0.0702074 14.1165 0.0696871 13.8481C0.153626 13.7069 0.587301 13.2126 1.04896 12.7606C1.83237 11.9838 1.87434 11.8991 1.87434 11.2494C1.87434 10.2467 2.34999 8.15641 2.82564 7.01242C3.70698 4.86567 5.59558 2.6483 7.48417 1.53255C10.1422 -0.0351418 13.6816 -0.430596 16.6613 0.487424C17.6546 0.798138 19.3613 1.58905 19.3613 1.73028C19.3613 1.77265 18.8437 1.82914 18.2142 1.84327C16.8992 1.87151 15.5841 2.23872 14.465 2.8884L13.7095 3.34034L14.5769 3.63693C15.808 4.06064 16.9132 5.03515 17.1929 5.95317C17.2769 6.24976 17.2489 6.26388 16.4655 6.26388L15.6541 6.27801L16.3396 6.60284C17.151 7.01242 17.8924 7.70447 18.2562 8.41063C18.522 8.91908 18.8577 10.2043 18.7598 10.3032C18.7318 10.3455 18.438 10.2608 18.1023 10.1478C17.137 9.79472 17.0111 9.87946 17.5707 10.4726C18.6199 11.546 18.9416 13.142 18.438 14.6532L18.2002 15.3311L17.2769 14.4131C15.3883 12.5629 13.1639 11.4613 10.6178 11.1364L9.91836 11.0517ZM6.07975 13.9934L5.33473 13.9934L4.60286 12.9241L3.86661 13.9934L3.12598 13.9934L4.18653 12.4946L3.19171 11.0703L3.93235 11.0703L4.60286 12.0695L5.26461 11.0703L6.01401 11.0703L5.0192 12.4902L6.07975 13.9934Z"
                  ></path>
                </svg>
              </a>
              <a
                className="transition-colors hover:text-sky-600"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/abravenewworld"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className="text-2xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
              <a
                className="transition-colors hover:text-sky-600"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/dnh33"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 496 512"
                  className="text-2xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </a>
              <a
                className="transition-colors "
                target="_blank"
                rel="noreferrer"
                href="https://handcash.io/#/invite/clunkykong"
              >
                <span className="font-bold">
                  Hand<span className="hover:text-green-500">cash</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
