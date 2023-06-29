import { LiaTelegram, LiaLinkedinIn } from "react-icons/lia"
import { LuMail, LuGithub } from "react-icons/lu"
import Button from "./Button"

const Contact = () => {
  return <section className="container screen center flex flex-col" id="contacts">
    <h1 className="text-6xl font-title mb-8 max-md:!text-4xl">
      Contact
    </h1>
    <svg viewBox="0 0 100 100" width="256" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="mask">
          <path fill="white"
            d="M18.3,-34.2C22.5,-29.2,23.9,-21.9,26.9,-15.8C30,-9.7,34.7,-4.9,37.4,1.6C40.1,8,40.9,16,37.9,22.2C34.9,28.3,28.1,32.6,21.1,35.2C14.2,37.8,7.1,38.7,0,38.6C-7.1,38.6,-14.2,37.7,-20.9,35C-27.5,32.3,-33.8,27.7,-37.4,21.6C-41,15.4,-41.8,7.7,-41.2,0.4C-40.6,-7,-38.5,-14,-35.4,-20.9C-32.3,-27.8,-28.1,-34.6,-22,-38.5C-15.9,-42.4,-8,-43.5,-0.5,-42.6C7,-41.8,14,-39.2,18.3,-34.2Z"
            width="100%" height="100%" transform="translate(50 52) scale(1.2)">
          </path>
        </mask>
      </defs>
      <image href="https://avatars.githubusercontent.com/u/48291303?v=4" mask="url(#mask)" width="100%" height="100%" />
    </svg>
    <p className="text-xl my-4 max-w-xs">
      Keep in touch with me!
    </p>
    <div className="grid grid-cols-2 gap-4 max-[360px]:grid-cols-1 max-[360px]:w-full">
      <Button color="#262c34" icon={<LuGithub />} text="Github" link={"https://github.com/Elagoht"} />
      <Button color="#0b76e0" icon={<LiaLinkedinIn />} text="LinkedIn" link={"https://linkedin.com/in/furkan-baytekin"} />
      <Button color="#ff4d3d" icon={<LuMail />} text="Mail" link={"mailto:furkanbaytekin@gmail.com"} />
      <Button color="#32bafe" icon={<LiaTelegram />} text="Telegram" link={"https://t.me/Elagoht"} />
    </div>
  </section >
}

export default Contact