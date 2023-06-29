import { BadgePlus, CreativeCommons, Lightbulb, Quote } from "lucide-react"
import Paper from "../../../components/Paper"

const WhoAmI = () => {
  return <Paper title="Who Am I?">
    <p className="text-pink-600 max-[480px]:text-center"><Quote className="inline" />  Describe yourself in  3 words!</p>
    <p className="flex max-[480px]:justify-center gap-3 flex-wrap">
      <span className="text-lime-900"><BadgePlus className="inline" /> Productive </span>
      <span className="text-indigo-900"><Lightbulb className="inline" /> Creative </span>
      <span className="text-red-900"><CreativeCommons className="inline" /> Collaborative</span>
    </p>
    <p>Whenever I interested in a subject, I had created
      something about it. Web & terminal apps, educative
      videos, designs, games etc.
      The biggest examples are in my <a className="text-red-700"
        target="_blank" rel="noreferrer"
        href="https://youtube.com/@herkesicinlinux"
      >Youtube
      </a> channel, <a className="text-purple-700"
        target="_blank" rel="noreferrer"
        href="https://www.udemy.com/user/furkan-baytekin/"
      >Udemy</a> profile and  <a className="text-neutral-500"
        target="_blank" rel="noreferrer"
        href="http://github.com/Elagoht"
      >Github</a> page.</p>
  </Paper>
}

export default WhoAmI
