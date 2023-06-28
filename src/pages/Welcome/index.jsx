import { ParallaxLayer } from "@react-spring/parallax"
import "./design.css"
import { ChevronDown } from "lucide-react"
import Shapes from "./Shapes"

const Welcome = () => {
  return <>
    <Shapes />
    <ParallaxLayer offset={0} speed={.75}>
      <section className="screen max-w-full center relative backdrop-blur flex-col">
        <h1>
          Hi! 👋 I am<br />
          Furkan Baytekin.
        </h1>
        <h2>
          Software Developer, Designer, Instructor.
        </h2>
      </section>
      <a href="#about"
        className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-2"
      >
        See More
        <ChevronDown />
      </a>
    </ParallaxLayer >
  </>
}

export default Welcome
