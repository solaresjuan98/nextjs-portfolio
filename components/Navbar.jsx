import React, { useState } from 'react'
import Link from 'next/link'

export const Navbar = () => {

    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleCollapseNavbar = () => {
        setIsCollapsed(!isCollapsed);
    }



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link href="/">
                        <a className="navbar-brand">MyPortfolio</a>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor02"
                        aria-controls="navbarColor02"
                        aria-expanded={!isCollapsed ? true : false}
                        aria-label="Toggle navigation"
                        onClick={handleCollapseNavbar}
                        >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`${isCollapsed ? "collapse" : ""} navbar-collapse`} id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link href="/blog">
                                    <a className="nav-link active">Blog</a>
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link href="/github">
                                    <a className="nav-link">Github</a>
                                </Link>

                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
