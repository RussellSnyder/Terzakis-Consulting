import fs from 'fs';
import matter from 'gray-matter';
import { FeatureImageProps, HomeFeaturedImages } from '../components/homeFeaturedImages';
import { NavBottomLayout } from '../components/navBottomLayout';
import ReactMarkdown from 'react-markdown'

interface Props {
  featureImageProps: FeatureImageProps[]
}

const Home = ({featureImageProps}: Props) => {
  return (
    <NavBottomLayout>
      <HomeFeaturedImages featureImageProps={featureImageProps} />
    </NavBottomLayout>
  )
}

export default Home

export async function getStaticProps() {

  const featureImageFiles = fs.readdirSync('content/pages/home/')

  const featureImageProps: FeatureImageProps[] = featureImageFiles.map((fileName) => {
    const rawImageData = fs.readFileSync(`content/pages/home/${fileName}`)
    
    const {data, content} = matter(rawImageData)

    return {
      image: data.image,
      bgColor: data.bgColor,
      content
    }
  })

  console.log(featureImageProps)
  return {
    props: {
      featureImageProps
    }
  }
}