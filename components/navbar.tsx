import Link from 'next/link'
import ActiveLink from './activeLink'

const linkClass = "pt-2 w-full text-center border-t-2 border-orange-500 hover:border-t-4 hover:text-orange-500 hover:pt-1.5"
const activeClassName = 'border-t-4 border-black hover:text-black hover:pt-1.5'

export const Navbar = () => {
    return (
        <nav className="grid grid-cols-4 gap-8 justify-items-center">
            <ActiveLink activeClassName={activeClassName} href="/">
                <a className={linkClass}>
                    Home
                </a>
            </ActiveLink>
            <ActiveLink activeClassName={activeClassName} href="/terzakis">
                <a className={linkClass}>
                    Irini-Alexia Terzakis
                </a>
            </ActiveLink>
            <ActiveLink activeClassName={activeClassName} href="/health-psychology">
                <a className={linkClass}>
                    Health Psychology
                </a>
            </ActiveLink>
            <ActiveLink activeClassName={activeClassName} href="/contact">
                <a className={linkClass}>
                    Contact
                </a>
            </ActiveLink>
        </nav>
    )
}