export const pageHeaderClass = 'text-4xl mb-6'
export const bodyClass = 'text-lg mb-4'

export const PageHeader = ({text}: {text:string}) => (
    <h1 className={pageHeaderClass}>{text}</h1>
)

export const sharedMarkdownComponents = {
    h1: ({node, ...props}) => <h1 className={pageHeaderClass} {...props} />,
    p: ({node, ...props}) => <p className={bodyClass} {...props} />,
}