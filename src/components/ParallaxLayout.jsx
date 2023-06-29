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
  return <Parallax pages={31} className="top-0 left-0">

    <Shapes />
    <ParallaxLayer offset={0} speed={.75}> <Welcome /> </ParallaxLayer>

    <ParallaxLayer sticky={{ start: 1, end: 7 }}> <BackgroundAbout /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 1, end: 1.75 }}> <About /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 2.75, end: 3.5 }}> <WhoAmI /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 4.5, end: 5.25 }}> <WhatIDo /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 6.25, end: 7 }}> <TechStack /> </ParallaxLayer>

    <ParallaxLayer sticky={{ start: 8, end: 21.5 }}> <BackgroundProjects /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 8, end: 8.75 }}> <Projects /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 9.75, end: 10.5 }}> <NewTabPage /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 11.5, end: 12.25 }}> <TerminalPortfolio /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 13.25, end: 14.5 }}> <MakeEndeavourOSGreat /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 15.5, end: 16.25 }}> <PugCV /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 17.25, end: 18 }}> <AlbumAdvertise /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 19, end: 19.75 }}> <BlackBlog /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 20.75, end: 21.5 }}> <SudoMice /> </ParallaxLayer>

    <ParallaxLayer sticky={{ start: 22.5, end: 29 }}> <BackgroundLessons /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 22.5, end: 23.25 }}> <Lessons /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 24.25, end: 25.5 }}> <VimCourse /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 26.5, end: 27.25 }}> <LinuxTerminalCourse /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 28.25, end: 29 }}> <MarkdownCourse /> </ParallaxLayer>

    <ParallaxLayer sticky={{ start: 30, end: 31 }}> <BackgroundContact /> </ParallaxLayer>
    <ParallaxLayer sticky={{ start: 30, end: 31 }}> <Contact /> </ParallaxLayer>

  </Parallax >
}

export default ParallaxLayout
