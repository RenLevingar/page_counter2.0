// import for both useState and useEffect
import {useState, useEffect} from 'react';

// page counter function
const PageViewCounter = () => {
    // counter use state
    const [counter, setCounter] = useState(0)

    // use effect
    useEffect(()=>{
        // gets the starting vlaue for the current load
        let start = localStorage.getItem("counter");
        let newCount = start;

        // makes counter equal newcount +1
        setCounter(newCount++);

        // sets div with the id "counter" to an increment of newCount which is equal to counter
        localStorage.setItem("counter", newCount++);
    }, [])
  return (
    // returns the div
    <div  className="counter" ><div id="counter">Render Counter: {counter}</div></div>
  )
}

// export for the page view counter
export default PageViewCounter;