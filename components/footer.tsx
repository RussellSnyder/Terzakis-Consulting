export const Footer = () => {
    return (
        <footer className="mt-20 flex">
            <div className="flex-2">
                <h4 className="text-lg mb-3">©{new Date().getFullYear()} by Terzakis Consulting</h4>
                <p className="text-xs">
                    Angaben gem. § 5 TMG: Betreiberin und Kontaktperson Irini-Alexia Terzakis, Röttenbacher Str. 40, 91325 Neuhaus
                </p>
                <p className="text-xs">
                    Tel: 0172 - 942 7779, E-Mail-Adresse: irini@terzakisconsulting.com
                </p>
                <p className="text-xs">
                    Verantwortliche für journalistisch-redaktionelle Inhalte gem. § 55: Irini-Alexia Terzakis.
                </p>
            </div>
            <div className="flex-1 grid items-center justify-items-end">
                <p className="text-right">Coded by Russell</p>
            </div>
        </footer>
    )
}