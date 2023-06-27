import { Parallax } from "@react-spring/parallax"
import Header from "./compents/Header"
import Welcome from "./compents/Welcome"

function App() {
  return <>
    <Header />
    <Parallax pages={5} className="top-0 left-0">
      <Welcome />
    </Parallax>
  </>
}

export default App
