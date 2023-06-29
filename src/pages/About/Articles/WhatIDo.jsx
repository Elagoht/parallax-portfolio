import Paper from "../../../components/Paper"

const WhatIDo = () => {
  return <Paper title="What I Do?">
    <p>I code, design, edit, teach and learn.</p>
    <p>I am familiar with
      <span className="text-orange-700"> HTML</span>,
      <span className="text-blue-700"> CSS</span>,
      <span className="text-yellow-300"> Javascript</span>,
      <span className="text-sky-700"> Python</span>,
      <span className="text-purple-700"> C#</span>,
      <span className="text-green-700"> Shell Script</span> & <a
        target="_blank" rel="noreferrer"
        className="cursor-help no-underline"
        href="https://en.wikipedia.org/wiki/AWK"
      >
        <span className="text-gray-700">AWK</span>.
      </a>
    </p>
    <p>
      My journey has began in 2012. Have designed
      web sites, produced educational videos and
      courses, written blogs and resources,
      developed games.
    </p>
  </Paper>
}

export default WhatIDo
