import Button from "./Button";

interface Props {
  image: string;
  heading: string;
  text: string;
  buttonText: string;
}

const SectionImage = ({image, heading, text, buttonText}: Props) => {
  const formattedText = text.replace(/\n/g, '<br>');

  return (
    <div className="img-section-container">
      <img src={image} className="img-section-img" />
      <div>
        <h4 className="section-content">{heading}</h4>
        <p className="section-content" dangerouslySetInnerHTML={{__html: formattedText}}></p>
        <Button text={buttonText} />
      </div>
    </div>
  )
}

export default SectionImage
