import fs from 'fs'
import ReactMarkdown from 'react-markdown'
import { Layout } from '../../components/layout'
import { parseMarkdownFile } from '../../utils/mardkownHelper'

import { HealthPsychologyImageGallery } from '../../components/healthPsychologyImageGallery'
import { sharedMarkdownComponents } from '../../components/typography'


interface Props {
  top: string
  imageGallery: string[]
  bottom: string
}

const sharedComponents = {
  p: ({node, ...props}) => <p className='text' {...props} />,
}

const topReactMarkdownComponents = {
  p: ({node, ...props}) => <p className='col-span-2 md:col-span-1' {...props} />,
  h1: ({node, ...props}) => <h1 className='col-span-2 text-4xl mb-6' {...props} />,
  h2: ({node, ...props}) => <h2 className='col-span-2 mt-8 text-2xl mb-6 text-left' {...props} />,
  blockquote: ({node, ...props}) => <blockquote className='mt-4 md:mt-0 text-emerald-500 md:ml-20' {...props} />,
}

const bottomReactMarkdownComponents = {
  p: ({node, ...props}) => <p className='' {...props} />,
  a: ({node, ...props}) => <a className='text-orange-500' {...props} />,
  h2: ({node, ...props}) => <h2 className='mt-8 text-2xl mb-6 text-left' {...props} />,
  blockquote: ({node, ...props}) => <blockquote className='py-6 w-80 md:w-400 mx-auto sm:mx-0 md:ml-auto text-xl text-center md:text-left text-emerald-500' {...props} />,
}

const HealthPsychology = ({top, bottom, imageGallery}: Props) => {
  return (
    <Layout>
      <div className='grid grid-cols-1 md:grid-cols-2 justify-items-start place-items-center'>
        <ReactMarkdown components={topReactMarkdownComponents}>{top}</ReactMarkdown>
      </div>
      <div>
        <HealthPsychologyImageGallery imageGalleryData={imageGallery} />
      </div>
      <ReactMarkdown components={bottomReactMarkdownComponents}>{bottom}</ReactMarkdown>
    </Layout>
  )
}

export default HealthPsychology

export async function getStaticProps() {
  const folder = 'content/pages/healthPsychology/'

  const imageGalleryFiles = fs.readdirSync(`${folder}imageGallery/`)

  const imageGallery = imageGalleryFiles.map((fileName) => {
    return parseMarkdownFile(`${folder}imageGallery/${fileName}`).content
  })

  const top = parseMarkdownFile(`${folder}/top.md`)
  const bottom = parseMarkdownFile(`${folder}/bottom.md`)

  return {
    props: {
      top: top.content,
      imageGallery,
      bottom: bottom.content
    }
  }
}