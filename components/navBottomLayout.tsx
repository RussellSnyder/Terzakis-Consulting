import { ReactNode } from 'react'
import { Footer } from './footer'
import { Navbar } from './navbar'
import { PageHeader } from './pageHeader'

interface Props {
    children: ReactNode
}
export const NavBottomLayout = ({children}: Props) => (
    <div className='p-10 container mx-auto max-w-screen-lg'>
        <PageHeader />
        <main>
            {children}
        </main>
        <Navbar/>
        <Footer />
    </div>
)
