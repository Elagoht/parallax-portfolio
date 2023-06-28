import { useEffect } from "react"
import { setMenuHandler } from "../../utils/states"
import FullName from "./FullName"
import Navbar from "./Navbar"
import "./design.css"

const Header = () => {

  useEffect(() => {
    // Check for window resize and manage menu visibility
    let minimized = true
    window.addEventListener("resize", (event) => {
      if (event.target.innerWidth < 768) {
        if (!minimized) {
          setMenuHandler(false)
        }
        minimized = true
      } else {
        minimized = false
        setMenuHandler(true)
      }
    })
    // Initialize menu visibility
    setMenuHandler(window.innerWidth > 768)
  }, [])

  return <header>
    <div className="container">
      <FullName />
      <Navbar />
    </div>
  </header>
}

export default Header
