import { ParallaxLayer } from "@react-spring/parallax"
import shapeTopLeft from "./Shapes/shapeTopLeft.svg"
import shapeTopRight from "./Shapes/ShapeTopRight.svg"
import shapeBottomRight from "./Shapes/ShapeBottomRight.svg"
import shapeBottomLeft from "./Shapes/ShapeBottomLeft.svg"
import shapeCenter from "./Shapes/ShapeCenter.svg"
import "./design.css"

const Welcome = () => {
  return <>
    <ParallaxLayer offset={0} speed={1.25}>
      <div className="screen max-w-full center relative">
        <img src={shapeBottomRight} alt="Shape 0" className="w-1/3 opacity-80 absolute right-12 bottom-0" />
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={1.5}>
      <div className="screen max-w-full center relative">
        <img src={shapeBottomLeft} alt="Shape 2" className="w-1/3 opacity-80 absolute bottom-0 left-0" />
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={1.15}>
      <div className="screen max-w-full center relative">
        <img src={shapeCenter} alt="Shape 1" className="min-w-[480px] w-1/2 opacity-80" />
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={.125}>
      <div className="screen max-w-full center relative">
        <img src={shapeTopRight} alt="Shape 2" className="w-1/3 opacity-80 absolute top-0 right-8" />
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={.15}>
      <div className="screen max-w-full center relative">
        <img src={shapeTopLeft} alt="Shape 2" className="w-1/3 opacity-80 absolute top-0 left-8" />
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={.75}>
      <section className="screen max-w-full center relative backdrop-blur">
        <h1>
          Hi! 👋 I am<br />
          Furkan Baytekin.
        </h1>
        <div
          className="absolute bottom-10"
        >See More...</div>
      </section>
    </ParallaxLayer>
  </>
}

export default Welcome
