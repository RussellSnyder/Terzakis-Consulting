import fs from 'fs'
import type { NextPage } from 'next'
import ReactMarkdown from 'react-markdown'
import { Layout } from '../../components/layout'
import { parseMarkdownFile } from '../../utils/mardkownHelper'

import imprintImage from '../../public/imprint/imprint.png'
import Image from 'next/image'

interface Props {
  imprint: string
}

const Imprint = () => {
  return (
    <Layout>
      <div className="p-6 text-xl">
        <Image src={imprintImage} layout="responsive" />
        {/* <ReactMarkdown>
          {imprint}
        </ReactMarkdown> */}
      </div>
    </Layout>
  )
}

export default Imprint

// export async function getStaticProps() {
//   const folder = 'content/pages/imprint/'

//   const imprint = parseMarkdownFile(`${folder}/imprint.md`)

//   return {
//     props: {
//       imprint: imprint.content
//     }
//   }
// }