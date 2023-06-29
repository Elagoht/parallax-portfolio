import img_vim_terminal_editor from "../../../assets/lessons/vim_terminal_editor.png"
import Showcase from "../../../components/Showcase"
import { BookMarked, File, MonitorPlay } from "lucide-react"

const Vim = () => {
  return <Showcase img={img_vim_terminal_editor}>
    <h1>Vim Terminal Text Editor Course</h1>
    <p>
      I have created a worksheet and supported it with video narration, covering advanced usage, macros, window management, and terminal emulators.
    </p>

    <div className="flex gap-4 max-md:justify-center flex-wrap">
      <a
        className="button" target="_blank" rel="noreferrer"
        href="https://www.udemy.com/course/sifirdan-vim-ogrenin-terminal-metin-editoru/"
      >
        <BookMarked />Udemy
      </a>
      <a
        className="button" target="_blank" rel="noreferrer"
        href="https://www.youtube.com/watch?v=PIYaUPAD3ZY&list=PLGIvph8XiC3QS5d9dfotigUlKuDFx6-wV"
      >
        <MonitorPlay />YouTube
      </a>
      <a
        className="button" target="_blank" rel="noreferrer"
        href="https://www.youtube.com/watch?v=PIYaUPAD3ZY&list=PLGIvph8XiC3QS5d9dfotigUlKuDFx6-wV"
      >
        <File /> Resources
      </a>
    </div>
  </Showcase>

}

export default Vim
