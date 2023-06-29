import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import Welcome from "../pages/Welcome"
import About from "../pages/About"
import WhatIDo from "../pages/About/Articles/WhatIDo"
import WhoAmI from "../pages/About/WhoAmI"
import TechStack from "../pages/About/Articles/TechStack"
import Shapes from "../pages/Welcome/Shapes"
import Background from "../pages/About/Background"


const ParallaxLayout = () => {
  return <Parallax pages={10} className="top-0 left-0">
    <Shapes />
    <ParallaxLayer offset={0} speed={.75}> <Welcome /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 1, end: 6 }}> <Background /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 1, end: 1.25 }} > <About /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 1.75, end: 2.5 }} id="about"> <WhoAmI /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 3.5, end: 4.25 }}> <WhatIDo /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 5.25, end: 6 }}> <TechStack /> </ParallaxLayer>
  </Parallax >
}

export default ParallaxLayout
