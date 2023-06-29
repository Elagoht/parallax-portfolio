import Showcase from "../../../components/Showcase"
import img_terminal_portfolio from "../../../assets/projects/terminal_portfolio.webp"
import { Github, Presentation } from "lucide-react"

const TerminalPortfolio = () => {
  return <Showcase img={img_terminal_portfolio}>
    <h1>Retro Terminal Portfolio</h1>
    <p>A recreated Linux terminal shell with a web interface to introduce myself.</p>
    <p>It is open source, so anyone can use it to create their own.</p>
    <div className="flex gap-4 max-md:justify-center flex-wrap">
      <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.github.io/TerminalPortfolio">
        <Presentation className="inline" /> See Demo
      </a>
      <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/TerminalPortfolio">
        <Github className="inline" /> Source Code
      </a>
    </div>
  </Showcase>

}

export default TerminalPortfolio
