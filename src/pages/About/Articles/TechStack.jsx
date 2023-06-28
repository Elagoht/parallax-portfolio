import Paper from "../Paper"
import tech_icons from "../../../assets/stack"
import "../design.css"

const TechStack = () => {

  return <Paper title="My Tech Toolkit">
    <div className="flex flex-wrap gap-x-2 gap-y-1 justify-center mt-4">
      {tech_icons.map(tool => (
        <div key={tool.name} className="tech-tool">
          <img src={tool.icon} alt={tool.name} />
          {tool.name}
        </div>
      ))}
    </div>
  </Paper>
}

export default TechStack
