import Showcase from '../../../components/Showcase'
import img_black_blog from "../../../assets/projects/black_blog.webp"
import { Github, Presentation } from 'lucide-react'

const BlackBlog = () => {
  return <Showcase img={img_black_blog}>
    <h1>Black Blog</h1>
    <p>A blog website with dark/light theme and font face/size settings. It was initially created with PHP but later converted to vanilla HTML, CSS, and JS.</p>
    <div className="flex gap-4 max-md:justify-center flex-wrap">
      <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.github.io/BlackBlog">
        <Presentation className="inline" /> See Demo
      </a>
      <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/BlackBlog">
        <Github className="inline" /> Source Code
      </a>
    </div>
  </Showcase>

}

export default BlackBlog
