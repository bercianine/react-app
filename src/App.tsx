import Navbar from "./components/Navbar"
import SectionText from "./components/SectionText"
import Carousel from "./components/Carousel"
import SectionImage from "./components/SectionImage"

import banner1 from "./assets/banner-1.png"
import banner2 from "./assets/banner-2.png"
import banner3 from "./assets/banner-3.png"
import shapes from "./assets/shapes.png"

const IMAGES = [banner1, banner2, banner3]
const sectionOne = ['Inspiration and motivation can come from many sources. I selected a few for you.', "DISPLAY is a place to find exactly what you need to take you where you need to go. Stuck in what seems like a dead end in your project? Starting a new one without a clue on how to kick things off? Maybe you're looking at the final product of your hard work but still it doesn't seem to be clicking, there's something missing, but what? There are answers to your questions. There is a way to stop wondering. Ever heard of the sentence, you don't need to reinvent the wheel? Well, with the right research, perhaps you can still improve it."]
const sectionTwo = [shapes, 'Make your own lists and watch away.', 'Join DISPLAY, make an account so you can create watchlists and easily \n access all the content you selected. No hustle, just sit back and enjoy.']

function App() {
  return (
    <>
      <Navbar />
      <SectionText rightSide={sectionOne[0]} leftSide={sectionOne[1]} />
      <Carousel imageUrls={IMAGES}/>
      <SectionImage image={sectionTwo[0]} heading={sectionTwo[1]} text={sectionTwo[2]} buttonText="Join now"/>
    </>
  )
}

export default App
