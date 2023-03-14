import { useEffect, useRef, useState } from "react";
function App() {
  const [count, setCount] = useState(60)
  const timer = useRef()
  const old = useRef()
  const refEl = useRef()

  useEffect(() => {
    old.current = count
  }, [count])

  useEffect(() => {
    console.log(refEl.current);
  }, [count])

  function handleStart() {
    timer.current = setInterval(() => {
      setCount(prevcount => prevcount - 1);
    }, 1000);
  }


  const handleStop = () => {
    clearInterval(timer.current)
  }

  console.log('old',old.current);
  console.log('count',count);

  return (
    <div style={{margin : 30}}>
      <h1 ref={refEl}>{count}</h1>
      <button onClick={handleStart}> Start</button>
      <button onClick={handleStop}> Stop</button>
    </div>
  );
}

export default App;
