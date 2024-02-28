import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Hello <strong>world</strong></Alert>}
      <Button color="warning" onClick={() => setAlertVisibility(true)}>Click me!</Button>
    </>
  )
}

export default App
