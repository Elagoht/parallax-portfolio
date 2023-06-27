import { AnimatePresence, motion } from "framer-motion"
import { useSelector } from "react-redux"
import { setMenuHandler } from "../../utils/states"
const Navbar = () => {

  const menu = useSelector(state => state.navMenu.open)

  const closeHande = () => {
    setMenuHandler(window.innerWidth > 768)
  }

  return <AnimatePresence mode="wait">
    {menu && <motion.nav
      initial={{ height: 0, translateX: "-100%", opacity: 0 }}
      animate={{ height: "24rem", translateX: 0, opacity: 1 }}
      exit={{ height: 0, translateX: "100%", opacity: 0 }}
      transition={{ ease: "easeInOut" }}
    >
      <a onClick={closeHande} href="#about">About</a>
      <a onClick={closeHande} href="#projects">Projects</a>
      <a onClick={closeHande} href="#lessons">Lessons</a>
      <a onClick={closeHande} href="#contacts">Contacts</a>
    </motion.nav >}
  </AnimatePresence>
}

export default Navbar
