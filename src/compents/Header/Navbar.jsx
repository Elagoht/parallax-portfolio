import { AnimatePresence, motion } from "framer-motion"
import { useSelector } from "react-redux"
const Navbar = (props) => {

  const menu = useSelector(state => state.navMenu.open)

  return <AnimatePresence mode="wait">
    {menu && <motion.nav
      initial={{ marginTop: "-100%", opacity: 0 }}
      animate={{ marginTop: 0, opacity: 1 }}
      exit={{ marginTop: "100%", opacity: 0 }}
      {...props}
    >
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#lessons">Lessons</a>
      <a href="#contacts">Contacts</a>
    </motion.nav >}
  </AnimatePresence>
}

export default Navbar
