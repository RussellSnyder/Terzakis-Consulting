import fs from 'fs';
import { FeatureImageProps, HomeFeaturedImages } from '../components/homeFeaturedImages';
import { NavBottomLayout } from '../components/navBottomLayout';
import { MarkdownContent } from '../types';
import { parseMarkdownFile } from '../utils/mardkownHelper';

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

export function getStaticProps() {

  const folder = 'content/pages/home/images/'
  const featureImageFiles = fs.readdirSync(folder)

  const featureImageProps: MarkdownContent<FeatureImageProps>[] = featureImageFiles.map((fileName) => {
    return parseMarkdownFile<FeatureImageProps>(`${folder}${fileName}`)
  })

  return {
    props: {
      featureImageProps
    }
  }
}