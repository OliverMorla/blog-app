"use client"

import { usePathname, useRouter } from 'next/navigation';
import { useGlobal } from "../../context/GlobalContext";
import Link from "next/link";
import "./Header.scss"

const Header = () => {
    const { currentUser, logOut } = useGlobal()
    const pathname = usePathname();
    // const router = useRouter();

    // const handleLogOut = async (e) => {
    //     e.preventDefault()

    //     try {
    //         const res = await logOut()
    //         router.push('/')
    //     } catch (err) {
    //         alert('Failed to log out!')
    //         console.log(err.message);
    //     }
    // }

    return (
        <header className="header-w">
            <div className="brand-title">
                <Link href="/"> Blog <sub> App </sub> </Link>
            </div>
            <nav className="nav-wrapper">
                <Link href="/" className={pathname === '/' ? "active" : "nav-item"}>Home</Link>
                <Link href="/news" className={pathname === '/news' ? "active" : "nav-item"}>News</Link>
                <Link href="/blogs" className={pathname === '/blogs' ? "active" : "nav-item"}>Blogs</Link>
                {currentUser
                    ? <div className="dropdown-menu">
                        <Link href="/auth/dashboard" className={pathname === '/auth/dashboard' ? "active" : "nav-item"}>{currentUser?.username}</Link>
                        <div className="dropdown-content">
                            <Link href="/auth/dashboard" className={pathname === '/auth/dashboard' ? "active" : "nav-item"}>Dashboard</Link>
                            <Link href="" onClick={handleLogOut} className={pathname === '/auth/logout' ? "active" : "nav-item"}>Log Out</Link>
                        </div>
                    </div>
                    : (<Link href="/auth/login" className={pathname === '/auth/login' ? "active" : "nav-item"}>Sign In</Link>)}
            </nav>
        </header>
    );
}

export default Header;