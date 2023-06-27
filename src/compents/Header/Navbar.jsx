import { AnimatePresence, motion } from "framer-motion"
import { useSelector } from "react-redux"
import { setMenuHandler } from "../../utils/states"
const Navbar = () => {

  const menu = useSelector(state => state.navMenu.open)

  return <AnimatePresence mode="wait">
    {menu && <motion.nav
      initial={{ marginTop: "-100%", opacity: 0 }}
      animate={{ marginTop: 0, opacity: 1 }}
      exit={{ marginTop: "-100%", opacity: 0 }}
    >
      <a onClick={() => setMenuHandler(false)} href="#about">About</a>
      <a onClick={() => setMenuHandler(false)} href="#projects">Projects</a>
      <a onClick={() => setMenuHandler(false)} href="#lessons">Lessons</a>
      <a onClick={() => setMenuHandler(false)} href="#contacts">Contacts</a>
    </motion.nav >}
  </AnimatePresence>
}

export default Navbar
