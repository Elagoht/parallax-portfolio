import { Github, Presentation } from 'lucide-react'
import Showcase from '../../../components/Showcase'
import img_pug_cv from "../../../assets/projects/pug_cv.webp"

const PugCV = () => {
  return <Showcase img={img_pug_cv}>
    <h1>Pug CV</h1>
    <p>A portfolio website that can be perfectly optimized for printing. You can easily obtain a PDF file from this page.</p>
    <div className="flex gap-4 max-md:justify-center flex-wrap">
      <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.github.io/pugCV">
        <Presentation className="inline" /> See Demo
      </a>
      <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/pugCV">
        <Github className="inline" /> Source Code
      </a>
    </div>
  </Showcase>

}

export default PugCV
