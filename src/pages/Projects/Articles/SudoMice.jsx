import Showcase from "../../../components/Showcase"
import { Gamepad, Github } from "lucide-react"
import img_sudo_mice from "../../../assets/projects/sudo_mice.webp"

const SudoMice = () => {
  return <Showcase img={img_sudo_mice}>
    <h1>Sudo Mice</h1>
    <p>A two-player war battle game where we control mice to write codes by jumping on keyboards to summon units and attack the enemy castle.</p>
    <div className="flex gap-4 max-md:justify-center flex-wrap">
      <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.itch.io/sudo-mice">
        <Gamepad className="inline" /> Play Game
      </a>
      <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/SudoMice">
        <Github className="inline" /> Main Page
      </a>
    </div>
  </Showcase>
}

export default SudoMice
