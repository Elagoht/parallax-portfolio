import shapeBackground from "./Shape.svg"

const BackgroundContact = () => {
  return <div className="screen max-w-full center relative">
    <img src={shapeBackground} alt="Shape 1"
      className="floating select-none min-w-[75vh] w-1/2 opacity-80"
    />
  </div>
}

export default BackgroundContact
