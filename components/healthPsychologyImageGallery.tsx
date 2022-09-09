import Image from 'next/image'

import bridgeImage from '../public/home/bridge.png'
import compassImage from '../public/home/compass.png'
import waterImage from '../public/home/water.png'

import ReactMarkdown from 'react-markdown'

import image1 from '../public/healthPsychology/benefit_gallery_1.png'
import image2 from '../public/healthPsychology/benefit_gallery_2.png'
import image3 from '../public/healthPsychology/benefit_gallery_3.png'
import image4 from '../public/healthPsychology/benefit_gallery_4.png'
import image5 from '../public/healthPsychology/benefit_gallery_5.png'
import image6 from '../public/healthPsychology/benefit_gallery_6.png'

const imageMap = {
  0: image1,
  1: image2,
  2: image3,
  3: image4,
  4: image5,
  5: image6,
}

export interface GalleryImageProps {
  markdown: string
  index: number
}

const reactMarkdownComponents = {
    h1: ({node, ...props}) => <h3 className='lg:text-2xl' {...props} />,
    p: ({node, ...props}) => <p className='text-slate-50 text-sm leading-loose md:text-base mt-2' {...props} />
}

const GalleryImage = ({markdown, index}: GalleryImageProps) => {
    return (
        <div
            className={`relative
                bg-emerald-400
                lg:mb-0
                h-40
            `}
        >
            <div className={`
                absolute top-0 left-0 right-0 h-40
                `}
            >
                <Image layout='fill' src={imageMap[index as keyof typeof imageMap]} className='transition hover:opacity-0 duration-500' />
            </div>
            <div className='p-6'>
                <ReactMarkdown
                    components={reactMarkdownComponents}
                >
                    {markdown}
                </ReactMarkdown>
            </div>
        </div>

    )
}

interface Props {
    imageGalleryData: string[]
}

export const HealthPsychologyImageGallery = ({imageGalleryData}: Props) => {
  return (
      <div className='pt-5 pb-4 grid grid-cols-1 w-80 mx-auto sm:w-auto sm:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center'>
        {imageGalleryData.map((markdown, i) => <GalleryImage markdown={markdown} index={i}/>)}
      </div>
  )
}
