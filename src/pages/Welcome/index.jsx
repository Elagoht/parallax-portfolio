import { ChevronDown } from "lucide-react"

const Welcome = () => {
  return <>
    <section className="screen max-w-full center relative">
      <div id="welcome">
        <h1>
          Hi! 👋 I am<br />
          Furkan Baytekin.
        </h1>
        <h2>
          Software Developer, Designer, Instructor.
        </h2>
      </div>
    </section>
    <a href="#about"
      className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-2"
    >
      See More
      <ChevronDown />
    </a>
  </>
}

export default Welcome
