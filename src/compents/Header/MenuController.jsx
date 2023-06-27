import { useSelector } from "react-redux"
import { toggleMenuHandler } from "../../utils/states"
import { AnimatePresence, motion } from "framer-motion"

const MenuController = () => {

  const menu = useSelector(store => store.navMenu.open)
  console.log(menu)

  return <button onClick={() => toggleMenuHandler()}>
    <AnimatePresence mode="wait">
      <motion.div
        animate={menu
          ? { rotate: 45, translateY: 10 }
          : { rotate: 0, translateY: 0 }
        }
      ></motion.div>
      <motion.div
        animate={menu
          ? { translateX: -100, opacity: 0 }
          : { translateX: 0, opacity: 1 }
        }
      ></motion.div>
      <motion.div
        animate={menu
          ? { rotate: -45, translateY: -10 }
          : { rotate: 0, translateY: 0 }
        }
      ></motion.div>
    </AnimatePresence>
  </button >
}

export default MenuController
