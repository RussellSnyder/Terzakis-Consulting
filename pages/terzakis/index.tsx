import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { Layout } from '../../components/layout'
import { sharedMarkdownComponents } from '../../components/typography'

import { BioData } from '../../content/pages/terzakis/bio'
import iriniFace from '../../public/IriniFace.png'
import { MarkdownContent } from '../../types'
import { parseMarkdownFile } from '../../utils/mardkownHelper'

const reactMarkdownComponents = {
  ...sharedMarkdownComponents,
  h2: ({...props}) => <h4 className='text-2xl mt-8 mb-4' {...props} />,
  ul: ({...props}) => <ul className='columns-2 mx-10 list-disc bg-orange-300 p-4 pl-10 text-lg mb-12' {...props} />,
}

interface Props {
  bio: MarkdownContent<BioData>
}

const Terzakis = ({bio}: Props) => {
  const {content, data} = bio

  return (
    <Layout>
      <div className="lg:flex">
        <div className='mx-auto w-64 flex-none lg:mr-8'>
          <Image alt="Irini Terzakis headshot" layout='responsive' src={iriniFace}/>
          <ul className='mb-10 lg:mb-0 text-center lg:text-left'>
            <li className='mt-8 text-orange-400 text-xl'>{data.name}</li>
            <li>{data.degree1}</li>
            <li>{data.degree2}</li>
          </ul>
        </div>
        <div className=''>
          <ReactMarkdown components={reactMarkdownComponents}>{content}</ReactMarkdown>
        </div>

      </div>
    </Layout>
  )
}

export default Terzakis

export async function getStaticProps() {
  const bio = parseMarkdownFile<BioData>('content/pages/terzakis/bio.md')

  return {
    props: {
      bio
    }
  }
}