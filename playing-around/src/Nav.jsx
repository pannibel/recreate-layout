import { useState } from 'react'


function Nav({className}) {

  if (className === "") {
    const [page, setPage] = useState("front");

    return (
        <>
    <nav>
        <a href="#" onClick={() => setPage("front")} name={page}>Front</a>
        <a href="#" onClick={() => setPage("about")} name={page}>About</a>
        <a href="#" onClick={() => setPage("contact")} name={page}>Contact</a>
    </nav>
          </>
    )
  }
}

export default Nav;