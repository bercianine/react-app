import { useState } from "react";
import { HiChevronRight } from "react-icons/hi2";
import { HiChevronLeft } from "react-icons/hi2";

interface Props {
  imageUrls: string[];
}

const Carousel = ({imageUrls}: Props) => {
  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1 ) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1
      return index - 1
    })
  }

  return (
    <div className="carousel-container">
      <div className="carousel-banners">
        {imageUrls.map((url, index) => (
          index === imageIndex && (
            <img key={url} className="carousel-banner" src={url} style={{ translate: `${-100 * index}%)` }}/>
          )
        ))}
      </div>
      <button onClick={showNextImage} className="carousel-button" style={{right: 0}}><HiChevronRight /></button>
      <button onClick={showPrevImage}className="carousel-button" style={{left: 0}}><HiChevronLeft /></button>
    </div>
  )
}

export default Carousel
