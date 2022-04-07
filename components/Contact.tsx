import React from 'react'
import userData from 'constants/data'

export default function Contact() {
  return (
    <section>
      <div className="mx-auto h-48 max-w-6xl bg-white antialiased dark:bg-gray-800">
        <h1 className="py-20 text-center text-5xl font-bold md:text-left md:text-9xl">
          Contact
        </h1>
      </div>
      <div className="mx-auto mb-20 -mt-4 max-w-6xl rounded-md p-4 shadow-md dark:bg-gray-900 md:p-10 lg:p-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="md:ml-4">
            <header className="">
              <h1 className="text-2xl font-semibold dark:text-gray-50">
                Get in touch, let's talk.
              </h1>
              <p className="mt-2 text-base font-light dark:text-gray-200">
                Fill in the details and I'll get back to you as soon as I can.
              </p>
            </header>
            <div className="icons-container my-20 inline-flex flex-col">
              <div className="flex flex-row items-center space-x-6 rounded-md border p-4 hover:border hover:border-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-envelope-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg>
                <p className="text-sm font-light dark:text-gray-50">
                  {userData.email}
                </p>
              </div>
              <div className="flex flex-row items-center space-x-6 rounded-md border p-4 hover:border hover:border-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-pin-fill h-4 w-4 text-blue-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
                </svg>
                <p className="text-sm font-light dark:text-gray-50">
                  {userData.address}
                </p>
              </div>
            </div>
            <div className="social-icons flex flex-row space-x-8">
              <a
                href={userData.socialLinks.twetch}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-blue-500"
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
                href={userData.socialLinks.github}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-blue-500"
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
                href={userData.socialLinks.handcash}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full hover:bg-blue-500 hover:text-white"
              >
                <span className="font-bold hover:text-white">
                  H<span className="hover:text-green-500">C</span>
                </span>
              </a>
            </div>
          </div>
          <form className="form flex flex-col rounded-lg bg-white p-4">
            <label htmlFor="name" className="mx-4 text-sm text-gray-600">
              {' '}
              Your Name
            </label>
            <input
              type="text"
              className="mx-4 mt-2 rounded-md border py-2 px-1 font-light ring-blue-500 focus:border-none focus:outline-none focus:ring-2 dark:bg-white"
              name="name"
            />
            <label htmlFor="email" className="mx-4 mt-4 text-sm text-gray-600">
              Email
            </label>
            <input
              type="text"
              className="mx-4 mt-2 rounded-md border py-2 px-1 font-light ring-blue-500 focus:border-none focus:outline-none focus:ring-2 dark:bg-white"
              name="email"
            />
            <label
              htmlFor="message"
              className="mx-4 mt-4 text-sm text-gray-600 "
            >
              Message
            </label>
            <textarea
              rows={4}
              className="mx-4 mt-2 rounded-md border py-2 px-1 font-light ring-blue-500 focus:border-none focus:outline-none focus:ring-2 dark:bg-white"
              name="message"
            ></textarea>
            <button
              type="submit"
              className="mx-4 mt-8 w-1/2 rounded-md bg-blue-500 py-2 text-xs font-bold text-gray-50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
