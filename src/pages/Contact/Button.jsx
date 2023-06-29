const Button = ({ icon, text, link, color }) => {
  return <a
    href={link} className="button"
    style={{ backgroundColor: color }}
    target="_blank" rel="noreferrer"
  >
    {icon}
    <span>{text}</span>
  </a>
}

export default Button
