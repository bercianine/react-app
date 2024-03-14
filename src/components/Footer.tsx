import displayBlack from "../assets/display-logo-black.png"

const Footer = () => {

  return (
    <div className='footer'>
      <img src={displayBlack} alt="Display" />
      <div className='footer-text'>
        <h5>Created by Sofia Bercianine</h5>
        <h5>Contact</h5>
      </div>
    </div>
  )
}

export default Footer
