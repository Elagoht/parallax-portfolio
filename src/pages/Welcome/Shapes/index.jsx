import { ParallaxLayer } from '@react-spring/parallax'
import shapeTopLeft from "./shapeTopLeft.svg"
import shapeTopRight from "./ShapeTopRight.svg"
import shapeBottomRight from "./ShapeBottomRight.svg"
import shapeBottomLeft from "./ShapeBottomLeft.svg"
import shapeCenter from "./ShapeCenter.svg"

const Shapes = () => {
  return <>
    <ParallaxLayer offset={0} speed={1.25}>
      <div className="screen max-w-full center relative">
        <img src={shapeBottomRight} alt="Shape 0"
          className="floating select-none w-1/4 max-md:w-1/2 opacity-80 absolute md:right-12 right-0 bottom-0"
          style={{ animationDelay: "-200ms" }}
        />
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={1.5}>
      <div className="screen max-w-full center relative">
        <img src={shapeBottomLeft} alt="Shape 2"
          className="floating select-none w-1/4 max-md:w-1/2 opacity-80 absolute left-0 bottom-0"
          style={{ animationDelay: "-400ms" }}
        />
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={.125}>
      <div className="screen max-w-full center relative">
        <img src={shapeTopRight} alt="Shape 2"
          className="floating select-none w-1/4 max-md:w-1/2 opacity-80 absolute md:right-8 right-0 top-0"
          style={{ animationDelay: "-300ms" }}
        />
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={.15}>
      <div className="screen max-w-full center relative">
        <img src={shapeTopLeft} alt="Shape 2"
          className="floating select-none w-1/4 max-md:w-1/2 opacity-80 absolute md:left-8 left-0 top-0"
          style={{ animationDelay: "-800ms" }}
        />
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={1.15}>
      <div className="screen max-w-full center relative">
        <img src={shapeCenter} alt="Shape 1"
          className="floating select-none min-w-[75vh] w-1/2 opacity-80"
          style={{ animationDelay: "-00ms" }}
        />
      </div>
    </ParallaxLayer>
  </>
}

export default Shapes
