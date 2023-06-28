import shapeBackground from "./Shape.svg"

const About = () => {

  return <>
    <section className="flex center screen max-w-none p-0">
      <div
        id="about" className="container center items-start pt-24 max-w-none h-screen bg-top bg-no-repeat bg-contain max-lg:bg-cover"
        style={{ backgroundImage: `url(${shapeBackground})` }}
      >
        <h1 className="text-neutral-800 mt-8">About</h1>
      </div>
    </section >
  </>
}

export default About
