import store from "../stores"
import { setMenu, toggleMenu } from "../stores/navMenu"

export const setMenuHandler = (value) => {
  store.dispatch(setMenu(value))
}

export const toggleMenuHandler = (value) => {
  store.dispatch(toggleMenu(value))
}