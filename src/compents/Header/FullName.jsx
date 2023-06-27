import classNames from 'classnames'
import { useEffect, useState } from "react"
import MenuController from "./MenuController"

const FullName = () => {

  const [name, setName] = useState(true)


  useEffect(() => {
    setName(
      document.documentElement.scrollTop < window.innerHeight
    )
  }, [])


  return <div className={classNames(
    "text-3xl font-title transition-all flex w-full items-center h-24",
    { "-mt-24": !name }
  )}>
    <MenuController />
    <div className="flex-1">
      Furkan Baytekin
    </div>
  </div>
}

export default FullName
