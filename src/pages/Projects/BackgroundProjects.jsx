import shapeBackground from "./Shape.svg"

const BackgroundProjects = () => {
  return <div className="screen max-w-full center relative">
    <img src={shapeBackground} alt="Shape 1"
      className="floating select-none min-w-[75vh] w-1/2 opacity-80"
      style={{ animationDelay: "-00ms" }}
    />
  </div>
}

export default BackgroundProjects
