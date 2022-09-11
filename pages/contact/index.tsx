import { Layout } from '../../components/layout'
import { PageHeader } from '../../components/typography'
import { parseMarkdownFile } from '../../utils/mardkownHelper'
import { ContactPageData } from '../../content/pages/contact/contact'
import Image from 'next/image'
import contactImage from '../../public/contact/contact.png'

interface Props extends ContactPageData {}

const Contact = ({pageHeader}: Props) => {
  return (
    <Layout>
      <PageHeader text={pageHeader} />
      <div className='text-lg md:text-2xl p-6'>
        <Image alt="contact information for Terzakis Consulting" layout={'responsive'} src={contactImage} />
        {/* <div className='mb-6'>
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
        </div> */}
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