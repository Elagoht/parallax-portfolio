import { MonitorPlay } from "lucide-react"
import img_markdown from "../../../assets/lessons/markdown.jpg"
import Showcase from "../../../components/Showcase"

const MarkdownCourse = () => {
  return <Showcase img={img_markdown}>
    <h1>Markdown Course</h1>
    <p>
      The course provides a markdown resource for teaching markdown, supported with video narration. It only lasts for 20 minutes!
    </p>

    <div className="flex gap-4 max-md:justify-center flex-wrap">
      <a
        className="button" target="_blank" rel="noreferrer"
        href="https://www.youtube.com/watch?v=uRM54l1bQrk&list=PLGIvph8XiC3Sh7g-ffQFtU2CX8DFp_lu7"
      >
        <MonitorPlay />YouTube
      </a>
      <a
        className="button" target="_blank" rel="noreferrer"
        href="https://github.com/Elagoht/30-dakikada-markdown-ogrenin"
      >
        <MonitorPlay /> Resources
      </a>
    </div>
  </Showcase >
}

export default MarkdownCourse
