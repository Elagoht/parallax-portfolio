import Showcase from "../../../components/Showcase"
import img_new_tab from "../../../assets/projects/react_new_tab.webp"
import { Github, Presentation } from "lucide-react"

const NewTabPage = () => {
  return <Showcase img={img_new_tab}>
    <h1>New Tab Page</h1>
    <p>Elegance, simplicity, and effectiveness in a new tab page. Written in React.js.</p>
    <p>You can add new sites, delete existing ones, and rearrange their positions. Site favicons are fetched automatically. All data is stored in local storage.</p>
    <div className="flex gap-4 max-md:justify-center flex-wrap">
      <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.github.io/react-new-tab">
        <Presentation className="inline" /> See Demo
      </a>
      <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/react-new-tab">
        <Github className="inline" /> Source Code
      </a>
    </div>
  </Showcase>
}

export default NewTabPage
