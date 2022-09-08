import Image from 'next/image'

import bridgeImage from '../public/home/bridge.png'
import compassImage from '../public/home/compass.png'
import waterImage from '../public/home/water.png'

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

const reactMarkdownComponents = {
    h1: ({node, ...props}) => <h3 className='md:font-bold lg:font-normal lg:text-2xl' {...props} />,
    p: ({node, ...props}) => <p className='text-xs sm:text-sm md:text-base mt-4' {...props} />
}

const responsiveClassSizes = 'h-56 w-56 sm:h-72 sm:w-72 lg:h-30 lg:w-auto'

const FeatureImage = ({image, content, bgColor}: FeatureImageProps) => {
    return (
        <div style={{backgroundColor: bgColor}}
            className={`relative
                lg:mb-0
                ${responsiveClassSizes}`}
        >
            <div className={`
                absolute top-0 left-0 right-0
                ${responsiveClassSizes}
                `}
            >
                <Image layout='fill' src={availableFeatureImages[image as keyof typeof availableFeatureImages]} className='transition hover:opacity-0 duration-500' />
            </div>
            <div className='p-4 pb-6'>
                <ReactMarkdown
                    components={reactMarkdownComponents}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </div>

    )
}

interface Props {
    featureImageProps: FeatureImageProps[]
}

export const HomeFeaturedImages = ({featureImageProps}: Props) => {
  return (
      <div className='pt-5 pb-20 grid grid-cols-1 lg:grid-cols-3 gap-4 place-items-center'>
        {featureImageProps.map((props) => <FeatureImage key={props.bgColor} {...props}/>)}
      </div>
  )
}
