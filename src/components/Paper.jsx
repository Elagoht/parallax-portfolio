const Paper = ({ title, children }) => {
  return <article className=" screen container center flex-col max-w-4xl">
    <div className="pt-12 grid gap-4">
      <h1>{title}</h1>
      {children}
    </div>
  </article>
}

export default Paper