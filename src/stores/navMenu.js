import { createSlice } from "@reduxjs/toolkit"

const navMenu = createSlice({
  name: "navMenu",
  initialState: { open: true },
  reducers: {
    setMenu: (state, actions) => {
      state.open = actions.payload
    },
    toggleMenu: (state) => {
      state.open = !state.open
    }
  }
})

export const { setMenu, toggleMenu } = navMenu.actions
export default navMenu.reducer