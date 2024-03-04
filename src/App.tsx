import Carousel from "./components/Carousel"
import Navbar from "./components/Navbar"

import banner1 from "./assets/banner-1.png"
import banner2 from "./assets/banner-2.png"
import banner3 from "./assets/banner-3.png"

const IMAGES = [banner1, banner2, banner3]

function App() {
  return (
    <>
      <Navbar />
      <Carousel imageUrls={IMAGES}/>
    </>
  )
}

export default App
