import { configureStore } from "@reduxjs/toolkit"
import navMenu from "./navMenu"

const store = configureStore({
  reducer: {
    navMenu
  }
})

export default store
