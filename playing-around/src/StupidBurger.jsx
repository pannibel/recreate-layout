import { useState } from "react";
import Nav from "./Nav";

function StupidBurger() {
    
    const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openCloseMenu = () => {
    setMenuIsOpen((oldState) => !oldState);
    console.log(menuIsOpen);
  };

    const theClass = menuIsOpen ? "" : "hidden";

  return (
    <div>
        <button onClick={openCloseMenu}>|||</button>
        <Nav className={theClass}></Nav>
    </div>
  );
}

export default StupidBurger;