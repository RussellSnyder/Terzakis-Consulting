import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../../components/layout'
import styles from '../styles/Home.module.css'
import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown'

import iriniFace from '../../public/IriniFace.png'
import { MarkdownContent } from '../../types'
import { BioData } from '../../content/pages/terzakis/bio'
import { parseMarkdownFile } from '../../utils/mardkownHelper'

const reactMarkdownComponents = {
  h1: ({node, ...props}) => <h3 className='text-4xl mb-6' {...props} />,
  h2: ({node, ...props}) => <h4 className='text-2xl mt-8 mb-4' {...props} />,
  p: ({node, ...props}) => <p className='text-lg mb-4' {...props} />,
  ul: ({node, ...props}) => <ul className='columns-2 mx-10 list-disc bg-orange-300 p-4 pl-10 text-lg mb-12' {...props} />,
  Linkedin: ({}) => <p>does this work?</p>
}

interface Props {
  bio: MarkdownContent<BioData>
}

const Terzakis = ({bio}: Props) => {
  const {content, data} = bio

  return (
    <Layout>
      <div className="lg:flex mt-8">
        <div className='mx-auto w-64 flex-none lg:mr-8'>
          <Image layout='responsive' src={iriniFace}/>
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