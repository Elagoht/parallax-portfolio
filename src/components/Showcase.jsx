export default function Showcase({ img, children }) {
  return <article className="content-container screen center">
    <img
      className="w-1/2 max-lg:w-full object-contain"
      src={img} alt="Laptop Mockup"
    />
    <div className="w-1/2 max-lg:w-full max-lg:pb-8 flex flex-col gap-4 justify-center">
      {children}
    </div>
  </article>
}
