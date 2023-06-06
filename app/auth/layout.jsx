export const metadata = {
    title: 'Blog App - Auth',
    description: 'Blog Application',
}

export default function AuthLayout({ children }) {
    return (
        <main>
            {children}
        </main>
    )
}