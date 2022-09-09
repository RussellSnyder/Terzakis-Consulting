import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logo.jpg'

export const PageBanner = () => {
    return (
        <header className="text-center mb-8">
            <Link href="/" title="Return to Home Page" >
                <Image className='cursor-pointer' src={logo} alt="Terzakis Consulting, Health Psychology, Delivering Key Insights &amp; Messages" />
            </Link>
        </header>
    )
}