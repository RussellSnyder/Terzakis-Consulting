import type { NextPage } from 'next'
import { Layout } from '../../components/layout'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { PageHeader } from '../../components/typography'
import { parseMarkdownFile } from '../../utils/mardkownHelper'
import { ContactPageData } from '../../content/pages/contact/contact'

interface Props extends ContactPageData {}

const Contact = ({pageHeader, phone, email}: Props) => {
  return (
    <Layout>
      <PageHeader text={pageHeader} />
      <div className='text-lg md:text-2xl p-6'>
        <div className='mb-6'>
          <a href={`tel:${phone}`} className="hover:text-orange-500">
            <PhoneIcon width={24} className="mr-4 inline" />
            {phone}
          </a>
        </div>
        <div>
          <a href={`mailto:${email}`} className="hover:text-orange-500">
              <EnvelopeIcon width={24} className="mr-4 inline" />
            {email}
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Contact

export async function getStaticProps() {
  const folder = 'content/pages/contact/'

  const {data} = parseMarkdownFile<ContactPageData>(`${folder}/contact.md`)

  return {
    props: {
      ...data
    }
  }
}