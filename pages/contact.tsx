import Contact from '@components/Contact'
import type { NextPage } from 'next'

const ContactPage: NextPage = () => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <main className="mx-auto max-w-4xl antialiased">
        <Contact />
      </main>
    </div>
  )
}

export default ContactPage
