import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="mt-20 flex flex-col md:flex-row justify-between">
            <div className="">
                <h4 className="text-lg mb-3">©{new Date().getFullYear()} by Terzakis Consulting</h4>
            </div>
            <div className="md:justify-items-end">
                <ul>
                    <li>
                        <Link href="/imprint">
                            imprint
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}