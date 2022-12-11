import Link from 'next/link'
import React from 'react'
import { NavbarWrapper } from './NavStyle'

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="container">
        <div className="logo">
          <h3>
            {/* <div className="brand"><span>{`</>`}</span></div> */}
            Frontend<span className="brev">init</span>
            </h3>
        </div>

        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Resources</Link>
        </nav>
      </div>
    </NavbarWrapper>
  )
}

export default Navbar