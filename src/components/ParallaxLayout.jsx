import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import Welcome from "../pages/Welcome"
import About from "../pages/About"
import WhatIDo from "../pages/About/Articles/WhatIDo"
import WhoAmI from "../pages/About/WhoAmI"
import TechStack from "../pages/About/Articles/TechStack"
import Shapes from "../pages/Welcome/Shapes"

const ParallaxLayout = () => {
  return <Parallax pages={10} className="top-0 left-0">
    <Shapes />
    <ParallaxLayer offset={0} speed={.75}> <Welcome /> </ParallaxLayer>
    <ParallaxLayer offset={1} sticky={{ start: 1, end: 5.5 }}> <About /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 1.25, end: 2 }}> <WhoAmI /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 3, end: 3.75 }}> <WhatIDo /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 4.75, end: 5.5 }}> <TechStack /> </ParallaxLayer>
  </Parallax >
}

export default ParallaxLayout
