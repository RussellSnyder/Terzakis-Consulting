import fs from 'fs';
import matter from 'gray-matter';
import { FeatureImageProps, HomeFeaturedImages } from '../components/homeFeaturedImages';
import { NavBottomLayout } from '../components/navBottomLayout';
import ReactMarkdown from 'react-markdown'
import { parseMarkdownFile } from '../utils/mardkownHelper';
import { MarkdownContent } from '../types';

interface Props {
  featureImageProps: MarkdownContent<FeatureImageProps>[]
}

const Home = ({featureImageProps}: Props) => {

  const structured = featureImageProps.map(({content, data}) => ({content, ...data}))

  return (
    <NavBottomLayout>
      <HomeFeaturedImages featureImageProps={structured} />
    </NavBottomLayout>
  )
}

export default Home

export async function getStaticProps() {

  const featureImageFiles = fs.readdirSync('content/pages/home/')

  const featureImageProps: MarkdownContent<FeatureImageProps>[] = featureImageFiles.map((fileName) => {
    return parseMarkdownFile<FeatureImageProps>(`content/pages/home/${fileName}`)
  })

  return {
    props: {
      featureImageProps
    }
  }
}