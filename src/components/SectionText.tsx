interface Props {
  rightSide: string;
  leftSide: string;
}

const SectionText = ({rightSide, leftSide}: Props) => {
  return (
    <div className="section-container">
      <h4 className="section-content">{rightSide}</h4>
      <p className="section-content">{leftSide}</p>
    </div>
  )
}

export default SectionText
