import { Github, Presentation } from 'lucide-react'
import Showcase from '../../../components/Showcase'
import img_album_advertisement_site from "../../../assets/projects/album_advertisement_site.webp"

const AlbumAdvertise = () => {
  return <Showcase img={img_album_advertisement_site}>
    <h1>Album Advertise</h1>
    <p>Introduce your art to the world. Link your platforms to the page. Make your masterpieces reachable to others. Create a Showcase for your other albums.</p>
    <div className="flex gap-4 max-md:justify-center flex-wrap">
      <a className="button" target="_blank" rel="noreferrer" href="https://elagoht.github.io/AlbumAdvertisementSite">
        <Presentation className="inline" /> See Demo
      </a>
      <a className="button" target="_blank" rel="noreferrer" href="https://github.com/Elagoht/AlbumAdvertisementSite">
        <Github className="inline" /> Source Code
      </a>
    </div>
  </Showcase>

}

export default AlbumAdvertise
