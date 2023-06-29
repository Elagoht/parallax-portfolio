import img_linux_terminal from "../../../assets/lessons/linux_terminal.jpg"
import Showcase from '../../../components/Showcase'
import { MonitorPlay } from 'lucide-react'


const LinuxTerminalCourse = () => {
  return <Showcase img={img_linux_terminal}>
    <h1>Linux Terminal Course</h1>
    <p>
      Terminal tools are the key to power on Linux. The course includes 76 different commands.
      Each command is explained in detail in separate videos.
    </p>

    <div className="flex gap-4 max-md:justify-center flex-wrap">
      <a
        className="button" target="_blank" rel="noreferrer"
        href="https://www.youtube.com/watch?v=49OO2gD-x8E&list=PLGIvph8XiC3Qze9JPrU4JrwKqBd7E1bah"
      >
        <MonitorPlay />YouTube
      </a>
      <a
        className="button" target="_blank" rel="noreferrer"
        href="https://www.youtube.com/watch?v=49OO2gD-x8E&list=PLGIvph8XiC3Qze9JPrU4JrwKqBd7E1bah"
      >
        <MonitorPlay /> Resources
      </a>
    </div>
  </Showcase>
}

export default LinuxTerminalCourse
