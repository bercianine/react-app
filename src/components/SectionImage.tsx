interface Props {
  image: string;
  heading: string;
  text: string;
}

const SectionImage = ({image, heading, text}: Props) => {
  return (
    <div className="section-container">
      <img src={image} className="section-content" />
      <div>
        <h4 className="section-content">{heading}</h4>
        <p className="section-content">{text}</p>
      </div>
    </div>
  )
}

export default SectionImage
