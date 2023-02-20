import Content from "./Content"
import { useState } from "react";
function App() {
  const [show, setShow] = useState(false)
  return (
    <div style={{margin : 30}}>
      <button onClick={() => { setShow(!show) }}> toogle</button>
      {show && <Content />}
    </div>
  );
}

export default App;
