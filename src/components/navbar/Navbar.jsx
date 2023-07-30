import Link from 'next/link'
import React from 'react'

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

function Navbar() {
  return (
    <>
      <Link href={"/"}>Main</Link>
      {
        links.map(({ id, url, title }) => {
          return (
            <Link key={id} href={url}>{title}</Link>
          )
        })
      }
    </>
  )
}

export default Navbar