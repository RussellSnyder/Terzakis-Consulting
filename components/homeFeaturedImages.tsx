import Image from 'next/image'

import bridgeImage from '../public/bridge.png'
import compassImage from '../public/compass.png'
import waterImage from '../public/water.png'

import ReactMarkdown from 'react-markdown'

export const availableFeatureImages = {
    bridgeImage: bridgeImage,
    compassImage: compassImage,
    waterImage: waterImage,
}

export interface FeatureImageProps {
  image: string
  bgColor: string
  content: any
}

const FeatureImage = ({image, content, bgColor}: FeatureImageProps) => {
    console.log(image)
    return (
        <div style={{backgroundColor: bgColor}} className="relative">
            <div className='p-4' >
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
            <div className='absolute top-0 left-0 right-0'>
            <Image layout='responsive' src={availableFeatureImages[image as keyof typeof availableFeatureImages]} className='transition hover:opacity-0 duration-500' />
            </div>
        </div>

    )
}

// const imageData: FeatureImageProps[] = [
//   {
//     imageData: 'bridgeImage',
//     title: 'Health Communication',
//     p1: 'Evidence-based health psychology paired with effective communication techniques to make sure your healthcare campaign works - by getting the right message across the right way.',
//     p2: 'The key: expert knowledge of human health behavior and plenty of real-life experience.',
//     bgColor: '#FFBD73'
//   },
//   {
//     imageData: 'compassImage',
//     title: 'Strategic Consulting',
//     p1: 'Launching a healthcare campaign in Germany? Local knowledge and hands-on experience are key.',
//     p2: 'Let me help you navigate the German healthcare system and mentality to make your project a success.',
//     bgColor: '#FFE873'
//   },
//   {
//     imageData: 'waterImage',
//     title: 'Psychological Research',
//     p1: 'Effective health campaigns are based on profound insights into the root causes of patient and client behavior.',
//     p2: 'The key is to go beyond pigeon-holing people into personas and market segments. Psychological research digs deeper and find the spots you need to hit to really make a difference',
//     bgColor: '#4EC1A1'
//   },
// ]

interface Props {
    featureImageProps: FeatureImageProps[]
}

export const HomeFeaturedImages = ({featureImageProps}: Props) => {
  return (
      <div className='pt-5 pb-20 grid grid-cols-3 gap-4'>
        {featureImageProps.map((props) => <FeatureImage key={props.bgColor} {...props}/>)}
      </div>
  )
}
