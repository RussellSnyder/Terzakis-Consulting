import { ReactNode } from 'react'
import { Footer } from './footer'
import { Navbar } from './navbar'
import { PageBanner } from './pageHeader'

interface Props {
    children: ReactNode
}
export const NavBottomLayout = ({children}: Props) => (
    <div className='p-10 container mx-auto max-w-screen-lg'>
        <PageBanner />
        <main>
            {children}
        </main>
        <Navbar/>
        <Footer />
    </div>
)
