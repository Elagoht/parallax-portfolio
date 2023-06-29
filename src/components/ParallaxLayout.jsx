import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import Welcome from "../pages/Welcome"
import BackgroundAbout from "../pages/About/BackgroundAbout"
import About from "../pages/About"
import WhatIDo from "../pages/About/Articles/WhatIDo"
import WhoAmI from "../pages/About/Articles/WhoAmI"
import TechStack from "../pages/About/Articles/TechStack"
import Shapes from "../pages/Welcome/Shapes"
import BackgroundProjects from "../pages/Projects/BackgroundProjects"
import Projects from "../pages/Projects"
import TerminalPortfolio from "../pages/Projects/Articles/TerminalPortfolio"
import NewTabPage from "../pages/Projects/Articles/NewTabPage"
import MakeEndeavourOSGreat from "../pages/Projects/Articles/MakeEndeavourOSGreat"
import PugCV from "../pages/Projects/Articles/PugCV"
import AlbumAdvertise from "../pages/Projects/Articles/AlbumAdvertise"
import BlackBlog from "../pages/Projects/Articles/BlackBlog"
import SudoMice from "../pages/Projects/Articles/SudoMice"
import BackgroundLessons from "../pages/Lessons/BackgroundLessons"
import VimCourse from "../pages/Lessons/Articles/VimCourse"
import Lessons from "../pages/Lessons"
import LinuxTerminalCourse from "../pages/Lessons/Articles/LinuxTerminalCourse"
import MarkdownCourse from "../pages/Lessons/Articles/MarkdownCourse"
import BackgroundContact from "../pages/Contact/BackgroundContact"
import Contact from "../pages/Contact"

const ParallaxLayout = () => {
  return <Parallax pages={26} className="top-0 left-0">

    <Shapes />
    <ParallaxLayer offset={0} speed={.75}> <Welcome /> </ParallaxLayer>

    <ParallaxLayer sticky={{ start: 1, end: 6 }}> <BackgroundAbout /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 1, end: 1.25 }}> <About /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 1.75, end: 2.5 }}> <WhoAmI /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 3.5, end: 4.25 }}> <WhatIDo /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 5.25, end: 6 }}> <TechStack /> </ParallaxLayer>

    <ParallaxLayer sticky={{ start: 6.5, end: 18.5 }}> <BackgroundProjects /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 6.5, end: 6.75 }}> <Projects /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 7.25, end: 8 }}> <NewTabPage /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 9, end: 9.75 }}> <TerminalPortfolio /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 10.75, end: 11.5 }}> <MakeEndeavourOSGreat /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 12.5, end: 13.25 }}> <PugCV /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 14.25, end: 15 }}> <AlbumAdvertise /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 16, end: 16.75 }}> <BlackBlog /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 17.75, end: 18.5 }}> <SudoMice /> </ParallaxLayer>

    <ParallaxLayer sticky={{ start: 19, end: 24 }}> <BackgroundLessons /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 19, end: 19.25 }}> <Lessons /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 19.75, end: 20.5 }}> <VimCourse /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 21.5, end: 22.25 }}> <LinuxTerminalCourse /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 23.25, end: 24 }}> <MarkdownCourse /> </ParallaxLayer>

    <ParallaxLayer sticky={{ start: 24.5, end: 25.5 }}> <BackgroundContact /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 24.5, end: 25.5 }}> <Contact /> </ParallaxLayer>
  </Parallax >
}

export default ParallaxLayout
