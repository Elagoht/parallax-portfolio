import shapeBackground from "./Shape.svg"

const BackgroundProjects = () => {
  return <div className="container center items-start pt-24 max-w-none h-screen bg-top bg-no-repeat bg-contain max-lg:bg-cover"
    style={{ backgroundImage: `url(${shapeBackground})` }}
  ></div>
}

export default BackgroundProjects
