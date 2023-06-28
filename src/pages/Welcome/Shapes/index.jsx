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
        <img src={shapeBottomRight} alt="Shape 0" className="select-none w-1/3 opacity-80 absolute right-12 bottom-0" />
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={1.5}>
      <div className="screen max-w-full center relative">
        <img src={shapeBottomLeft} alt="Shape 2" className="select-none w-1/3 opacity-80 absolute bottom-0 left-0" />
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={1.15}>
      <div className="screen max-w-full center relative">
        <img src={shapeCenter} alt="Shape 1" className="select-none min-w-[480px] w-1/2 opacity-80" />
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={.125}>
      <div className="screen max-w-full center relative">
        <img src={shapeTopRight} alt="Shape 2" className="select-none w-1/3 opacity-80 absolute top-0 right-8" />
      </div>
    </ParallaxLayer>
    <ParallaxLayer offset={0} speed={.15}>
      <div className="screen max-w-full center relative">
        <img src={shapeTopLeft} alt="Shape 2" className="select-none w-1/3 opacity-80 absolute top-0 left-8" />
      </div>
    </ParallaxLayer>
  </>
}

export default Shapes
