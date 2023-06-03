"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useGlobal } from "../../context/GlobalContext";
import "./Header.scss"

const Header = () => {
    const pathname = usePathname();

    const { currentUser, logOut } = useGlobal()

    const handleLogOut = async (e) => {
        e.preventDefault()
        
        try {
            const res = await logOut()
            console.log(res)
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <header className="header-w">
            <div className="brand-title">Blog <sub>App</sub></div>
            <nav className="nav-wrapper">
                <Link href="/" className={pathname === '/' ? "active" : ""}>Home</Link>
                <Link href="/news" className={pathname === '/news' ? "active" : ""}>News</Link>
                <Link href="/blogs/all" className={pathname === '/blogs/all' ? "active" : ""}>Blog</Link>
                {currentUser
                    ? <div className="dropdown-menu">
                        <Link href="/auth/dashboard" className={pathname === '/auth/dashboard' ? "active" : ""}>{currentUser?.username}</Link>
                        <div className="dropdown-content">
                            <Link href="/auth/dashboard" className={pathname === '/auth/dashboard' ? "active" : ""}>Dashboard</Link>
                            <Link href="/auth/logout" onClick={handleLogOut} className={pathname === '/auth/logout' ? "active" : ""}>Log Out</Link>
                        </div>
                    </div>
                    : <Link href="/auth/login" className={pathname === '/auth/create' ? "active" : ""}>Sign In</Link>}
            </nav>
        </header>
    );
}

export default Header;