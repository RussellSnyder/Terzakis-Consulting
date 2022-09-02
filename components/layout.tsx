import { ReactNode } from 'react'
import { Footer } from './footer'
import { Navbar } from './navbar'
import { PageHeader } from './pageHeader'

interface Props {
    children: ReactNode
}
export const Layout = ({children}: Props) => (
    <div className='p-10 container mx-auto max-w-screen-lg'>
        <PageHeader />
        <Navbar/>
        <main>
            {children}
        </main>
        <Footer />
    </div>
)
