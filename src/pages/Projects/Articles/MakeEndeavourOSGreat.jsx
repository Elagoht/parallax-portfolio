import { Github, Store } from "lucide-react"
import img_endeavour_os_tweaker from "../../../assets/projects/endeavour_os_tweaker.webp"
import Showcase from "../../../components/Showcase"

const MakeEndeavourOSGreat = () => {
  return <Showcase img={img_endeavour_os_tweaker}>
    <h1>Make Endeavour OS Great</h1>
    <p>Endeavour OS is already a great OS, but it can be a bit challenging for beginners. New Linux users may struggle to use it effectively...</p>
    <p>...without this program.</p>
    <div className="flex gap-4 max-md:justify-center flex-wrap">
      <a className="button" target="_blank" rel="noreferrer" href="https://aur.archlinux.org/make-endeavouros-great.git">
        <Store className="inline" /> Use App
      </a>
      <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/MakeEndeavourOSGreat">
        <Github className="inline" /> Source Code
      </a>
    </div>
  </Showcase>
}

export default MakeEndeavourOSGreat
